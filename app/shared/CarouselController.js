OnlineShoppingApp.controller('CarouselController',
    function CarouselController($scope){
        $scope.carouselNext = function() {
            $('#carouselExampleIndicators').carousel('next');
          }
          $scope.carouselPrev = function() {
            $('#carouselExampleIndicators').carousel('prev');
          }

    });