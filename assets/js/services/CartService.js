OnlineShoppingApp.factory("CartService", function ($http,localStorageService) {
   
    return {
        GetUserCarts: function (id) {
            
            return $http.get("https://localhost:44367/api/carts/"+id);
        },
       AddCart:function(cart)
       {
        return $http.post("https://localhost:44367/api/carts",cart);
       }
       
       
    }
});   