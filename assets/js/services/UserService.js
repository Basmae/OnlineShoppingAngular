OnlineShoppingApp.factory("UserService", function ($http,API) {
   var APIBase=API.BaseUrl+ API.UserAPI;

    return {
        GetUsers: function () {
            
            return $http.get(APIBase  );
        },
        UserExist: function (userName) {
            return $http.get(APIBase+"/Exist/" + userName);
        },
        GetUser: function (id) {
            return $http.get(APIBase +"/"+id) ;
        },
        GetUserByName: function (name) {
            return $http.get(APIBase  +"/name/"+name) ;
        }
    }
});   