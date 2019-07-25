OnlineShoppingApp.controller('ProductController',
    function ProductController($scope,ProductService,$log,localStorageService) {
        $scope.userName=localStorageService.Get("UserName"); 
        console.log($scope.userName);
        $scope.products;

         ProductService.GetProducts()
        .then(function (response)  
        {  
            $scope.products = response.data;  
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

        
       



    
});
