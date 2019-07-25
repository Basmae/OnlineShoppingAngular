OnlineShoppingApp.controller('FilterController',['modalService','$scope','ProductService','$window',
function(modalService, $scope,ProductService,$window){
  var vm=this;
  vm.show=modalService.modalOn;							// Flag to show or hide the modal
  vm.returnValue=modalService.returnValue;	// Reference to the service function to resolve the promise
 $scope.sliderValue1=0;
 $scope.sliderValue2=$scope.sliderValue1;
 $scope.minValue=0;
 $scope.maxValue=1000;
 $scope.step=100;
  $scope.$on('MODAL_OPEN',function(){
    vm.show=modalService.modalOn;
  });
  
  $scope.$on('MODAL_CLOSE',function(){
    vm.show=modalService.modalOn;
  });

  $scope.ApplyFilter=function()
  {
    $window.sessionStorage.min=$scope.sliderValue1;
    $window.sessionStorage.max=$scope.sliderValue2;
    //ProductService.SetMinMax($scope.sliderValue1,$scope.sliderValue2);
   // $window.location="#/home";
   $window.location.reload();
   //vm.returnValue('no');

  }
}]);



