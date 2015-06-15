// what does "new" do

/*
1. It creates a new empty object.

2. Object is linked to different/another object. [more detail]

3. Bran-new Object get bound as a this-keyword for the purpose of that function call.

4. It returns the newly created object (
    unless the constructor function returns a
    non-primitive value. In this case, that non-primitive value will be returned.
*/

function foo() {
    this.baz = "baz";
    console.log(this.bar + " " + baz)
}

var bar = "bar";
var baz = new foo();

console.log(baz);               // { baz: 'baz' }  // as was said "it returns newly created object"
                                // and "this" is that object itself for the function foo

