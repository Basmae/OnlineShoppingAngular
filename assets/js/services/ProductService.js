OnlineShoppingApp.factory("ProductService", function ($http,API) {
    return {
        GetProducts: function () {
            
            return $http.get(API.ProductsAPI);
        },
       GetProductImages:function(id){
           return $http.get(API.ProductsAPI+"/images/"+id)
       },
       GetProduct:function(id)
       {
        return $http.get(API.ProductsAPI+"/"+id);
       }
       
    }
});   