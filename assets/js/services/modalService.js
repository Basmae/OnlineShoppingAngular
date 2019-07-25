OnlineShoppingApp.service('modalService',['$q','$rootScope',function($q,$rootScope){   
    
    var s=this;    		// Self reference
    
    // Attributes
    s.modalOn=false;	// Flag to indicate if the modal is on or off. Close by default
    
    s.openModal=function(){
      s.defer=$q.defer();										// We create a deferrer
      s.modalOn=true;												// Flag the showing of the modal
      $rootScope.$broadcast('MODAL_OPEN');	// Broadcast the message that the popup is open
      return s.defer.promise;								// Return a promise to the calling function
    };
    
    s.returnValue=function(value){
      
      s.modalOn=false;												// We flag the closing of the modal
      $rootScope.$broadcast('MODAL_CLOSE');		// Broadcast the event
      
      s.defer.resolve(value);									// Return the resolved value of the modal
    };
    
  }]);