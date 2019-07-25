OnlineShoppingApp.controller('UserController',
    function UserController($scope,UserService,$log,$window,localStorageService,CartService) {
        $scope.userName=localStorageService.Get("UserName");
        $scope.userId=localStorageService.Get("UserId"); 
        CartService.GetUserCarts($scope.userId).then(function(response){
            $scope.CartCounter=response.data.length;
            $scope.CartCounter=0;
            response.data.forEach(cart => {
            $scope.CartCounter+=cart.quantity;

            });
        });
        
        
        if(!$scope.userId){
            $window.alert("Please Login");

        }
       
        if($window.location.pathname=='/home')
           $scope.isHome=1;
        
        

        $scope.logout = function()
        {
            localStorageService.Set("UserName","");
            localStorageService.Set("UserId",null);
            $window.location = 'login';
     
        }
        $scope.Sync=function()
        {
            $window.location.reload();
            
        }
       
    }
);
