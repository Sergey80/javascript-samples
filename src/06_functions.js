// #function #object

// Firs of all - functions are objects in JS

var f = function() {
    var method = function() {return "f2"};      // if functions are the objects - then they can have methods
};

var result = new f();

console.log(result);