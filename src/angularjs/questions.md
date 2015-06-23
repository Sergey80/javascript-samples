#The questions I had asked myself

1. What's the difference between ng-model and ng-bind

        ng-bind has one-way data binding ($scope --> view). 
        It has a shortcut {{ val }} which displays the scope value $scope.val inserted into html 
        where val is a variable name.
        
        ng-model is intended to be put inside of form elements and has two-way data binding 
        ($scope --> view and view --> $scope) e.g. <input ng-model="val"/>.
        
2. What's the difference between Service vs factory?  
   
   https://www.youtube.com/watch?v=BLzNCkPn3ao
   http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory
   
   There is Service vs Factory part has been covered.
   
   Service is all about new keyword actually which as we know does 4 things:
   
   creates brand new object
   links it to its prototype object
   connects lexical context to this
   and returns this
   And Factory contains functions that return Objects like that Service.
   
   To keep it simple: regarding the usage of it - it is up to user how go about this.
         
