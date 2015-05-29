// #literal #anonymous-function #closure

var add = function fun1(a,b) {

    // the function object created by a function literal contains a
    // link to that outer context (outer this) - #closure

    return a + b;
};

var a = function(a) {
            return a.apply(this,[1,2])
        }(add); // passing function created as/by literal

//var a1 = function fun(a) {
//    return a.apply(this,[1,2])
//}(fun1); // fun1 as a name is not available because add is only valid reference on it

console.log(a);