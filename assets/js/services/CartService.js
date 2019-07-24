OnlineShoppingApp.factory("CartService", function ($http,localStorageService,API) {
   
    return {
        GetUserCarts: function (id) {
            
            return $http.get(API.CartsAPI+"/"+id);
        },
       AddCart:function(cart)
       {
        return $http.post(API.CartsAPI,cart);
       },
       DeleteCart:function(cart)
       {
           return $http({
            method: 'DELETE',
            url : API.CartsAPI ,
            data: cart,
            headers: {
                'Content-type': 'application/json'
            }
        });
       },
       SubmitOrder:function(userId)
       {
           console.log("second", userId);
           return $http.post(API.OrderAPI+"/submit/"+ userId);
       }
       
       
    }
});   