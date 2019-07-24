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
    $routeProvider.otherwise({redirectTo:'/login'});
    
    //$locationProvider.html5Mode(true);
});