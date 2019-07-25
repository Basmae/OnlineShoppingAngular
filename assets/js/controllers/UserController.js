OnlineShoppingApp.controller('UserController',
    function UserController($scope,UserService,$log,$window,localStorageService,CartService) {
        $scope.userName=localStorageService.Get("UserName");
        $scope.userId=localStorageService.Get("UserId"); 
        if(!$scope.userId)
        $window.alert("Please Login");
        CartService.GetUserCarts($scope.userId).then(function(response){
            $scope.CartCounter=0;
            response.data.forEach(cart => {
            $scope.CartCounter+=cart.quantity;
                
            });
        });
        $scope.users;
        if($window.location.hash=='#/home')
           $scope.isHome=1;
        $scope.Exist = function(){
            console.log("fetching");
            UserService.UserExist($scope.userName).then(function(response){
                console.log(response.data);
                if(response.data==true)
                {
                    localStorageService.Set("UserName",$scope.userName)
                    UserService.GetUserByName($scope.userName).then(function(response){
                        localStorageService.Set("UserId",response.data.id);
                    })
                     $window.location = '#/home';
                }
                else
                $window.alert("Please enter valid userName");
    
            }).catch(function(error){
                $window.alert("Please enter valid userName");
            });
        };
        

        $scope.logout = function()
        {
            localStorageService.Set("UserName","");
            localStorageService.Set("UserId",null);
            $window.location = '#/login';
     
        }
        $scope.Sync=function()
        {
            $window.location.reload();
            
        }
       
    }
);
