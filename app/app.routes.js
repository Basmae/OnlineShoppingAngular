OnlineShoppingApp.config(function($routeProvider,$locationProvider){
   
    $routeProvider.when('/login',{
        templateUrl:'app/components/LoginComponent/login.html',
        controller:'UserController'
    });
    $routeProvider.when('/home',{
        templateUrl:'app/components/HomeComponent/home.html',
        controller:'ProductController'
    });
    $routeProvider.otherwise({redirectTo:'/index'});
    
    //$locationProvider.html5Mode(true);
});