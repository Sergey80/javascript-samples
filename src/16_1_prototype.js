// #Object.create

var anotherObject = {
    a: 2
};

console.log(anotherObject); // { a: 2 }

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

console.log ( myObject.a ); // 2
console.log(myObject);   // {}  don't you wonder why it is empty ?

// and no:
console.log(Object.prototype);  // {} still empty

// even though 'myObject' is {} empty

for (var k in myObject) {       // it CAN see prototype properties
    console.log("found: " + k);
}
// it is still able to find : a
console.log ( ("a" in myObject) ); // true

