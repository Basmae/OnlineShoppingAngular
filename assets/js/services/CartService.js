OnlineShoppingApp.factory("CartService", function ($http,localStorageService,API) {
   var APIBase=API.BaseUrl;
    return {
        GetUserCarts: function (id) {
            
            return $http.get(APIBase + API.CartsAPI+"/"+id);
        },
       AddCart:function(cart)
       {
        return $http.post(APIBase + API.CartsAPI,cart);
       },
       DeleteCart:function(cart)
       {
           return $http({
            method: 'DELETE',
            url :APIBase+ API.CartsAPI ,
            data: cart,
            headers: {
                'Content-type': 'application/json'
            }
        });
       },
       SubmitOrder:function(userId)
       {
           console.log("second", userId);
           return $http.post(APIBase + API.OrderAPI+"/submit/"+ userId);
       }
       
       
    }
});   