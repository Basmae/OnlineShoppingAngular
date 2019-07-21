OnlineShoppingApp.controller('ProductController',
    function ProductController($scope,ProductService,$log,$window) {
        $scope.userName=window.localStorage.userName; 
        console.log($scope.userName);
        $scope.products;

         ProductService.GetProducts()
        .then(function (response)  
        {  
            $scope.products = response.data;  
            
        }).catch(function (error)  

        {  
            $log.error('Oops! Something went wrong while fetching the data.')  
        }
        );
    
        }
       
);
