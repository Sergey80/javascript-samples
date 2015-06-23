#The questions I had asked myself

0. Wha is the Service?
        
        All services in Angular are singletons. 
        The services may be /supposed to be injected by $injector when app starts (initializing)  
        There are 5 ways / recipes how create a service   

1. What's the difference between ng-model and ng-bind

        ng-bind has one-way data binding ($scope --> view). 
        It has a shortcut {{ val }} which displays the scope value $scope.val inserted into html 
        where val is a variable name.
        
        ng-model is intended to be put inside of form elements and has two-way data binding 
        ($scope --> view and view --> $scope) e.g. <input ng-model="val"/>.
        
2. What's the difference between Service vs factory vs Provider ?  

          https://docs.angularjs.org/guide/providers  (official doc)
          http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory
       
          First of all: Provider is the way/recipe to create a service (singleton object) that suppose to be injected by $injector (how AngulaJS goes about IoC pattern).
          
          And Value, Factory, Service and Constant (4 other ways) - 
          is just syntactic sugar over Provider way/recepie.
          
          There is Service vs Factory part has been covered: https://www.youtube.com/watch?v=BLzNCkPn3ao
          
          Service is all about new keyword actually which as we know does 4 things:
          
          creates brand new object
          links it to its prototype object
          connects context to this
          and returns this
          And Factory is all about Factory Pattern - contains functions that return Objects like that Service.
          
          ability to use other services (have dependencies)
          service initialization
          delayed/lazy initialization
          And this simple/short video: covers also Provider: https://www.youtube.com/watch?v=HvTZbQ_hUZY (there you see can see how they go from factory to provider)
          
          Provider recipe is used mostly in the app config, before the app has fully started/initialized.
         
