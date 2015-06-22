Some "atoms" of information in the context of AngularJS domain/notions.
---

Angular Context - is an extension of browser-event loop (such as user interaction events).
    
         ($apply function decides if event goes through Angular Context or not -- see below in this doc...)

$digest loop - is an event of entering the Angular Context. It goes over all $watch list
        
         It goes and asks each watcher in the $watch list, like: 
        
         "hey $watch do is your value has hanged?" - if yes - it updates UI.
         
         If there is at least one of them that has changed, the loop will fire again until all of 
         the $watch report no changes.

$watch list - is a list of $watcher(s) that get created in this list every 
              time when model gets bound to UI. Like: `<input ng-model="user">` or `"{{user}}"` - this this the binding
              
Dirty checking - the process of checking $watch' value during the $digest loop whether it(value) has been changed 
                 or not - if yes - notify the UI. 
            
Example: 
                
    `{{ name }}`
    
    `<button ng-click="changeName()">Change the name</button>`         
         
         
         We press the button.
         1. The browser receives an event which will enter the angular context (I will explain why, later in this article).
         2. The $digest loop will run and will ask every $watch for changes.
         3. Since the $watch which was watching for changes in $scope.name reports a change, if will force another $digest loop.
         4. The new loop reports nothing.
         5. The browser gets the control back and it will update the DOM reflecting the new value of $scope.name
            
            
     So: EVERY event that enters the Angular context will run a $digest loop.          
              
$apply - says to event (that happens) to go through the Angular Context 
         (which will lead lead to go in/through $digest loop)
         
         When we use ng-click - the even will be wrapped inside/with $apply call.
         
         If you have an input with `ng-model="foo"` and you write an f, 
         the event will be called like this: `$apply("foo = 'f';")`
              

         So `ng-click` will trigger the `$apply`, but `onclick` will not.

         This makes click to force the $apply   
         element.bind('click', function() {
           scope.foo++;
           scope.$apply(); // $apply is a function of our $scope
         });
         
         The better way for using $apply - now if exception happens Angular will know about it
         
         element.bind('click', function() {
           scope.$apply(function() {
               scope.foo++;
               scope.bar++;
           });
         })
         
How $watch works:
         
         app.controller('MainCtrl', function($scope) {
           $scope.user = { name: "Fox" };
         
           $scope.updated = 0;
         
           $scope.$watch('user', function(newValue, oldValue) {
             if (newValue === oldValue) { return; }
             $scope.updated++;
           }, true); // compare by value
         });
         
         <body ng-controller="MainCtrl">
           <input ng-model="user.name" />
           Name updated: {{updated}} times.
         </body>
         
         
(Source/got from: http://angular-tips.com/blog/2013/08/watch-how-the-apply-runs-a-digest/)         