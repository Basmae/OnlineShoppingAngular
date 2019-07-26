OnlineShoppingApp.controller('ProductController',
    function ProductController($scope,ProductService,$log,localStorageService,$window) {
        $scope.userName=localStorageService.Get("UserName"); 
       console.log( $window.localStorage);
        console.log($scope.userName);
        $scope.products;
        $scope.loading;
        if($scope.userName =="")
        $window.alert("Please Login");

        $scope.min=$window.sessionStorage.min;
        $scope.max=$window.sessionStorage.max;
        console.log($scope.min);
        if((!$scope.min && !$scope.max)||($scope.min ==-1))
        {
         ProductService.GetProducts()
        .then(function (response)  
        {  
            $scope.products = response.data;  
            $scope.loading=1;
            $scope.products.forEach(product => {
                ProductService.GetProductImages(product.id).then(function(response){
                    
                    product.imageUrl=response.data[0].imageUrl;
                    
    
                }).catch(function(error){
                    console.log(error);
                $log.error('Oops! Something went wrong while fetching the data.')  
    
                })
                
            });
            
        }).catch(function (error)  

        {  
            $log.error('Oops! Something went wrong while fetching the data.')  
        });

    }
    else{
        ProductService.FilterProducts($scope.min,$scope.max)
        .then(function (response)  
        {  
            $scope.products = response.data;  
            $scope.loading=1;            
            $scope.products.forEach(product => {
                ProductService.GetProductImages(product.id).then(function(response){
                    
                    product.imageUrl=response.data[0].imageUrl;
                    
    
                }).catch(function(error){
                    console.log(error);
                $log.error('Oops! Something went wrong while fetching the data.')  
    
                })
                
            });
            
        }).catch(function (error)  

        {  
            $log.error('Oops! Something went wrong while fetching the data.')  
        });

        $window.sessionStorage.min=-1;
        $window.sessionStorage.max=-1;
    }


        $scope.Sync=function()
        {
            $window.location.reload();
            
        }
        
       



    
});
