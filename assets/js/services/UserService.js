OnlineShoppingApp.factory("UserService", function ($http) {
    return {
        GetUsers: function () {
            
            return $http.get("https://localhost:44367/api/users");
        },
        UserExist: function (userName) {
            return $http.get("https://localhost:44367/api/users/Exist/" + userName);
        },
        GetUser: function (id) {
            return $http.get("https://localhost:44367/api/users/"+id) ;
        },
        GetUserByName: function (name) {
            return $http.get("https://localhost:44367/api/users/name/"+name) ;
        }
    }
});   