OnlineShoppingApp.controller('UserController',
    function UserController($scope,UserService,$log,$window) {
        $scope.userName=$window.localStorage.userName;
        $scope.users;

        var AllUsers = UserService.GetUsers();  
        AllUsers.then(function (response)  
        {  
            $scope.users = response.data;  
            
        }).catch(function (error)  

        {  
            $log.error('Oops! Something went wrong while fetching the data.')  
        }
        );
    
        $scope.Exist = function(){
            console.log("fetching");
            UserService.UserExist($scope.userName).then(function(response){
                console.log(response.data);
                if(response.data==true)
                {
                    $window.localStorage.userName=$scope.userName;
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
            window.localStorage.userName="";
            window.location = '#/home';
     
        }
       
    }
);
