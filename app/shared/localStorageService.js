OnlineShoppingApp.factory("localStorageService", function ($window) {
    return {
        Set:function(Key , value)
        {
            $window.localStorage[Key]=value;
        },
        Get:function(key)
        {
            return $window.localStorage[key];

        }
       
    }
});   