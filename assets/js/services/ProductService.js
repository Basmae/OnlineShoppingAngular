OnlineShoppingApp.factory("ProductService", function ($http,API) {
   var APIBase=API.BaseUrl + API.ProductsAPI;

    return {
        GetProducts: function () {
            
            return $http.get(APIBase );
        },
       GetProductImages:function(id){
           return $http.get(APIBase +"/images/"+id)
       },
       GetProduct:function(id)
       {
        return $http.get(APIBase +"/"+id);
       },
       FilterProducts:function(min,max){
           return $http.get(APIBase + "/filter/"+min+"/"+max);
       }
       
    }
});   