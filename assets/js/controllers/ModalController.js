OnlineShoppingApp.controller('mainController', ['modalService','$scope',function(modalService,$scope){
  
    var vm=this;
    vm.result="";		// Default value for the result
    
    $scope.openModal=function(){
        console.log("modaaaal");
      modalService
        .openModal()
        .then(function(data){
            vm.result=data;
      });
    };
    
  }]);