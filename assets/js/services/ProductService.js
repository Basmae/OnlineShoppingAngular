OnlineShoppingApp.factory("ProductService", function ($http,API) {
    var APIBase=API.BaseUrl;   
    return {
        GetProducts: function () {
            return $http.get(APIBase+ API.ProductsAPI);
        },
       GetProductImages:function(id){
           return $http.get(APIBase+ API.ProductsAPI+"/images/"+id)
       },
       GetProduct:function(id)
       {
        return $http.get(APIBase+ API.ProductsAPI+"/"+id);
       },
       FilterProducts:function(min,max){
           return $http.get(APIBase+ API.ProductsAPI+"/filter/"+min+"/"+max);
       },
       
       
    }
});   