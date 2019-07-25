OnlineShoppingApp.config(function($routeProvider,$locationProvider){
   
    $routeProvider.when('/login',{
        templateUrl:'app/components/LoginComponent/login.html',
        controller:'UserController'
    });
    $routeProvider.when('/home',{
        templateUrl:'app/components/HomeComponent/home.html',
        controller:'ProductController'
    });
    $routeProvider.when('/details/:id',{
        templateUrl:'app/components/DetailsComponent/details.html',
        controller:'DetailsController'
    });
    $routeProvider.when('/cart',{
        templateUrl:'app/components/CartComponent/cart.html',
        controller:'CartController'
    });
    $routeProvider.when('/filter',{
        templateUrl:'app/components/HomeComponent/filter.html',
        controller:'FilterController'
    });
    $routeProvider.otherwise({redirectTo:'/login'});
    
    $locationProvider.html5Mode(true);
});