OnlineShoppingApp.factory("UserService", function ($http,API) {
    return {
        GetUsers: function () {
            
            return $http.get(API.UserAPI);
        },
        UserExist: function (userName) {
            return $http.get(API.UserAPI+"/Exist/" + userName);
        },
        GetUser: function (id) {
            return $http.get(API.UserAPI+"/"+id) ;
        },
        GetUserByName: function (name) {
            return $http.get(API.UserAPI+"/name/"+name) ;
        }
    }
});   