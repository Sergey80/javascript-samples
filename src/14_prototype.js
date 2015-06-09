/**
 * #proptotype #prototypical-inheritance #inheritance
 *
  * All JavaScript objects inherit the properties and methods from their prototype.
 * Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
 * Objects created with new Date() inherit the Date.prototype. The Object.prototype is on the top of the prototype chain.
 */

var date = new Date();      /* "new" does some things */
date.a = 1;
date.b = 1;

Date.prototype.sum = function() {
    return this.a + this.b;
};
Date.prototype.c = "1";

console.log( date.hasOwnProperty("prototype") );               // false
console.log( date.hasOwnProperty("constructor") );             // false - constructor is a function !
console.log( date.constructor );                               // "[Function: Date]"
console.log( date.constructor() );                             // Mon Jun 08 2015 22:20:34 GMT-0400 (Eastern Daylight Time)
console.log( date.constructor.hasOwnProperty("prototype") );   // true

console.log(date.prototype);   // undefined
console.log(Date.prototype.c); // undefined
console.log(date.c);           // "1"
console.log(date.sum());       // 2


// Once again

var My = function() {
   this.name = 'name1';
   return {
       b:"1"
   }
};
My.prototype.a = "1";

console.log(My);                    // [Function]
console.log(My.prototype);          // { a: '1' }
console.log(My.constructor);        // [Function: Function]
console.log(My.constructor());      // [Function]
console.log(My.constructor().name); //
console.log(My.constructor().b);    // undefined


console.log("--- mammal and cat, prototypical inheritance ----");

// Mammal

var Mammal = function(name) {
    this.name = name;
};
Mammal.prototype.getName = function() {
    return this.name; // 'this' will refer to "Mammal" class (if we create it with "new")
};
Mammal.prototype.says = function() {
    return this.saying || 'nothing to say';      // depending on Object "this" refers to its object
};

// Cat

var Cat = function (name) {
    this.name = name;
    this.saying = "meow";
};
Cat.prototype = new Mammal();           // makes us inherit "says" method

var myMammal = new Mammal("Bob");
console.log(myMammal.says());

var myCat = new Cat("CatName");
console.log( myCat.says() );      // "meow"

