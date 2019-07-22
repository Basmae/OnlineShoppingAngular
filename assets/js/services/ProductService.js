OnlineShoppingApp.factory("ProductService", function ($http) {
    return {
        GetProducts: function () {
            
            return $http.get("https://localhost:44367/api/products");
        },
       GetProductImages:function(id){
           return $http.get("https://localhost:44367/api/products/images/"+id)
       }
       
    }
});   