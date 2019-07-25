OnlineShoppingApp.factory("ProductService", function ($http,API) {
    var min=-1;
    var max=-1;
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
       },
       FilterProducts:function(min,max){
           return $http.get(API.ProductsAPI+"/filter/"+min+"/"+max);
       },
       GetMin:function(){
           return min;
       },
       GetMax:function(){
        return max;
    },
    SetMinMax:function(minValue,maxValue){
         min=minValue;
         max=maxValue;
    }
       
    }
});   