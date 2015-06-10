// Every object has "prototype" property

var obj = {}; // same as "new Object()". obj = {} is object literal / syntax sugar

Object.prototype.a = 1;

console.log(obj.a); // looking up for "a" property, if not found will look down in prototype

// Every prototype has "constructor" property

var constructor = Object.prototype.constructor;

console.log( constructor == Object); // true
// similarly:
var MyObject = function() {};
console.log(MyObject.prototype.constructor == MyObject); // true

// So the "constructor" is the Function/MyObject itself.
    // Object knows which function is responsible for its own created.
// That's why MyObject (starts with capital) is called a Constructor Function itself.

console.log(constructor); // [Function: Object] -
                          // constructor is a function that been used to create

// Having a "constructor", well we may create an object (again)
var objAgain = constructor.apply(); // like "Factory Method"
console.log("objAgain.a: " + objAgain.a); // 1 (again);

// We can assign a function to the constructor
Object.prototype.constructor = function() {
    console.log("Go, constructor, go!");
};
Object.prototype.constructor(); // "Go, constructor, go!"

// But we can not break a constructor,
// even if we run this code below, expecting that "new" will trigger our constructor
// we will not see any "Go, constructor, go!"

var myObject = new Object(); // se how new works  "17_new.js"


// Also:
/*
 When new Object is called,
 the Object.prototype becomes __proto__
 and the constructor becomes accessible from the object:
*/
console.log( myObject.__proto__ ); // { a: 1 }

// So actually __proto__ property contains our fake constructor
myObject.__proto__.constructor();