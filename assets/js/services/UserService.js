OnlineShoppingApp.factory("UserService", function ($http,API) {
   var APIBase=API.BaseUrl;
    return {
        GetUsers: function () {
            
            return $http.get(APIBase+ API.UserAPI);
        },
        UserExist: function (userName) {
            return $http.get(APIBase+ API.UserAPI+"/Exist/" + userName);
        },
        GetUser: function (id) {
            return $http.get(APIBase+ API.UserAPI+"/"+id) ;
        },
        GetUserByName: function (name) {
            return $http.get(APIBase+ API.UserAPI+"/name/"+name) ;
        }
    }
});   