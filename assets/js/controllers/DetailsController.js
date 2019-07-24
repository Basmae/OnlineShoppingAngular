OnlineShoppingApp.controller('DetailsController',
    function DetailsController($scope,ProductService,$log,$routeParams,CartService,UserService,localStorageService,$location) {
        
        $scope.product;
        $scope.counter=1;

         ProductService.GetProduct($routeParams.id)
        .then(function (response)  
        {  
            $scope.product = response.data;  
            ProductService.GetProductImages($scope.product.id).then(function(response){
                $scope.product.images=response.data;

            }).catch(function(error){
                $log.error('Oops! Something went wrong while fetching the data.')  
            })
            
        }).catch(function (error)  

        {  
            $log.error('Oops! Something went wrong while fetching the data.')  
        });

        $scope.CounterUp=function()
        {
            $scope.counter++;
        }
        $scope.CounterDown=function()
        {
            if($scope.counter>1)
                $scope.counter--;
        }
        $scope.AddToCart=function()
        {
            if($scope.product.quantity>=$scope.counter)
            {
                var cart={};
                cart.price=$scope.product.price;
                cart.productId=$scope.product.id;
                cart.product=$scope.product;

                cart.quantity=$scope.counter;
                UserService.GetUserByName(localStorageService.GetUserName()).then(function(response){
                    cart.userId=response.data.id;
                    cart.user=response.data;
                    CartService.AddCart(cart).then(function(response){
                        console.log(response);
                    }).catch(function(error){
                        console.log(error);
                    })
                }).catch(function(error){
                    $log.error('Oops! Something went wrong while fetching the data.')  
                });
                //CartService.SetCartCount($scope.counter);
            //window.location = '#/home';
                $location.path('/home');
            }
            
           
        }



    
});
