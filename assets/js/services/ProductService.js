OnlineShoppingApp.factory("ProductService", function ($http) {
    return {
        GetProducts: function () {
            
            return $http.get("https://localhost:44367/api/products");
        },
       
    }
});   