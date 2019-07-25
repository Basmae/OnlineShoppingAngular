OnlineShoppingApp.controller('CartController',
    function CartController($scope,CartService,localStorageService,ProductService,$location,$window){
       $scope.carts;
       $scope.submitAvailable;
       $scope.loading;
       $scope.userId=localStorageService.Get("UserId");
       if(!$scope.userId)
           $window.alert("Please Login");
        console.log($scope.userId);
       CartService.GetUserCarts($scope.userId).then(function(response){

           $scope.carts=response.data;
        $scope.loading=1;
           if($scope.carts.length>0)
           $scope.submitAvailable=1;
          // console.log($scope.carts)
           $scope.carts.forEach(cart => {
           ProductService.GetProduct(cart.productId).then(function(response){
               cart.product=response.data;
               if(cart.product.quantity>=cart.quantity)
               {
                   cart.InStock="InStock";
               }
               else
               cart.InStock="OutStock";
           })   
              ProductService.GetProductImages(cart.productId).then(function(response){
                  cart.image=response.data[0].imageUrl;
              }) 
           });
       }).catch(function(error){
        console.log("noo");

       })

       $scope.Delete = function(cart)
       {
           CartService.DeleteCart(cart).then(function(response){
               //console.log("donee",response);
               $window.alert("item removed successfully");
               $window.location.reload();
              // $location.path('/cart');               
           }).catch(function(error){
               console.log(error);
           })
       }
       $scope.SubmitOrder= function(){
           console.log("hii",$scope.userId);
           CartService.SubmitOrder($scope.userId).then(function(response){
               $window.alert("order submitted successfuly");
               $window.location.reload();
           })
       }

    });