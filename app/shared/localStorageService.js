OnlineShoppingApp.factory("localStorageService", function ($window) {
    return {
        GetUserName: function () {
            
            return $window.localStorage.userName;
        },
        SetUserName: function (userName) {
            $window.localStorage.userName=userName;
        },
        GetUserId: function () {
            
            return $window.localStorage.userId;
        },
        SetUserId: function (userId) {
            $window.localStorage.userId=userId;
        }
       
    }
});   