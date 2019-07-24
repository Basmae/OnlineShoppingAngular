OnlineShoppingApp.controller('UserController',
    function UserController($scope,UserService,$log,$window,localStorageService,CartService) {
        $scope.userName=localStorageService.GetUserName();
        $scope.userId=localStorageService.GetUserId(); 
        CartService.GetUserCarts($scope.userId).then(function(response){
            $scope.CartCounter=response.data.length;
        });
        $scope.users;
        if($window.location.hash=='#/home')
           $scope.isHome=1;
        console.log($scope.isHome);
        $scope.Exist = function(){
            console.log("fetching");
            UserService.UserExist($scope.userName).then(function(response){
                console.log(response.data);
                if(response.data==true)
                {
                    localStorageService.SetUserName($scope.userName)
                    UserService.GetUserByName($scope.userName).then(function(response){
                        localStorageService.SetUserId(response.data.id);
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
            localStorageService.SetUserName("");
            localStorageService.SetUserId(0);
            $window.location = '#/login';
     
        }
       
    }
);
