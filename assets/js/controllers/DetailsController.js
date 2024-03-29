OnlineShoppingApp.controller('DetailsController',
    function DetailsController($scope,ProductService,$log,$routeParams,
        CartService,UserService,localStorageService,$location,$window) {
        
        $scope.product;
        $scope.counter=1;
        $scope.loading;

         ProductService.GetProduct($routeParams.id)
        .then(function (response)  
        {  
            $scope.product = response.data;  
        $scope.loading=1;
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
                UserService.GetUserByName(localStorageService.Get("UserName")).then(function(response){
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
           // $window.location.reload('/home');
                $location.path('home');
            }
            else{
                $window.alert("sorry the product isn't available in the store");
                $location.path('home');

            }
           
        }



    
});
