OnlineShoppingApp
    .directive('ngLoader',
        function() {
            return {
                restrict: 'E',
                replace: true,
                template: '<div class="row text-justify justify-content-center">'+
                '<div ng-if="!loading" class="spinner-border" role="status">'+
                       ' <span class="sr-only">Loading...</span>'+
                '</div> </div>'
                
            };
        });