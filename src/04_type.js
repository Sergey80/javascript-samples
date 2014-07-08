// #type #reflection

console.log (typeof  1);            // "number"

console.log(typeof "");             // "string"

console.log(typeof true);           // "boolean"

console.log(typeof  undefined);     // "undefined"

console.log(typeof  NaN);           // "number" (which is not exist i guess)

console.log(typeof null);           // "object"

console.log(typeof []);             // "object" -- array is object too

console.log(typeof function() {});  // "function"


var obj = {
    p1: 1
};

if (typeof obj.p1 != "undefined") console.log("obj.p1 exists!");

if (typeof obj.p2 == "undefined") console.log("obj.p2 does NOT exist!");    // type name called "undefined"

if (obj.hasOwnProperty("p1"))   console.log("indeed - obj.p1 exists!");   // same effect !