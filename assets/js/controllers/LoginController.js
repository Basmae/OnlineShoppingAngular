OnlineShoppingApp.controller('LoginController',
    function LoginController($scope,UserService,$log,$window,localStorageService,CartService) {
        $scope.userName=localStorageService.Get("UserName");
        $scope.userId=localStorageService.Get("UserId"); 
        
        
        $scope.Exist = function(){
            console.log("fetching");
            
            UserService.UserExist($scope.userName).then(function(response){
                console.log(response.data);
                if(response.data==true)
                {
                    localStorageService.Set("UserName",$scope.userName)
                    UserService.GetUserByName($scope.userName).then(function(response){
                    localStorageService.Set("UserId",response.data.id);
                    console.log("hhgdgh",response.data.id);
                    })

                     $window.location = 'home';
                }
                else
                $window.alert("Please enter valid userName");
    
            }).catch(function(error){
                $window.alert("Please enter valid userName");
            });
           
        };
        

       
    }
);
