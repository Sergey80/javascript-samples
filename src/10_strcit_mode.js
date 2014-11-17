// #strict-mode

// -- 1. impossible to define variable without "var"
(function() {
    "use strict";

    //test = "1";             // will not work in strict mode
    var test = "1";           // instead it should to defined with "var"

    console.log(test);

}) ();

// -- 2  this will refer to "undefined" but not not to some global object
(function() {
    "use strict";

    console.log(this);  // undefined. without strict mode that will refer to very global object (like 'window' this code would launch in browser)

}) ();

// -- 3 trying to write to read-only property

(function() {

    "use strict";

    var object = {};
    Object.defineProperty(object, "gender", {
        value: "male",
        writable: false, // read-only
        configurable: false // neither adding new or deleting exiting properties allowed
    });

    console.log(object.gender);

    // we can NOT do this:

    //object.gender = "female";       // trying to change the gender - will trow the ERROR if in Strict Mode
    //delete object.gender;           // same here - an error

    console.log(object.gender);  // if not String - then will print "male" as if we never trying to call setter


}) ();

// -- 4 does not allow assign to "arguments" or "eval"

(function() {

    "use strict";

    function foo(a,b,c) {
        console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
        //arguments = {};  // will print an Error in strict mode
        // eval = "you";   // same for eval
    }

    foo(1,2,3);

}());

// -- 5 Constructor should be with "new"

(function() {

    "use strict";

    function Foo(arg) {
        this.name = arg;        // this we use "this" that means that we are supposed to create new object of it to make "this" refering to the object
    }

    //var obj = Foo("value");   // will fail if we forgot to to use "new"

    // so instead we are forced to use "new"
    var obj = new Foo("value");

    console.log(obj.name); // "value" or "undefined" if we forgot to use "new" and we are not in Strict Mode

}) ();



