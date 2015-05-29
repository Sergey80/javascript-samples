// #scope
{
    var a = 1;
}

console.log(a);  // still visible! JS does _not_ have block scope

// -------------------------------
// JS jas function scope

function fun1 () {
    var a = 1;
    function func2() {
        var b = 2;
        console.log("from fun2: " + a);     // inner function can see scope of its parent function
    }
    //console.log(b); // "b" is not defined
    func2();
}
fun1();

// -------------------------------
// there is an exception - this, arguments.
// "this" and "arguments" are not in the scope in inner function.
// so inner function has its own "this" and "arguments"
var obj = {
    parent: function() {
        var that = this;
        function inner() {
            console.log(obj.parent.arguments == arguments); // false
            console.log(this == that);                      // false
        }
        inner();
    }
};
obj.parent();

// -------------------------------

var myObj = function () {
    var value = 0;
    return {
        inc:      function(add) { return value += add; }, // inner function inc & getValue have access to
        getValue: function()    { return value; }           // the "value" not to copy of it!
    }
}();

console.log("the value is: " + myObj.getValue());
myObj.inc(1);
myObj.inc(1);
console.log("the value is: " + myObj.getValue());


