// invocation patterns

// #this, #apply

// ----------------------------------
// 1. Function invocation pattern

console.log("\n#1:");

var f = function(a, b) {
    // console.log(this);  // "this" is global object (like window)
    return a + b
};
console.log(f(1,2));

// ----------------------------------
// 2. Method invocation pattern

console.log("\n#2:");

var obj = {
    a : 1,
    f: function(a, b) {       // method
        console.log(this.a);  // "this" refers to obj

        var ff = function(a, b) {
            console.log(this);      // "this" will refer to global object if ff(1,2)
            return a + b;
        };

        //return ff(a,b)                // ff will contain "this" referring to Global Object
        return ff.apply(this,[a,b]);     // workaround is to pass "this" explicitly
    }
};
console.log(obj.f(1,2));    // call "f" as method

// 3. Constructor Invocation Pattern

console.log("\n#3:");

var Thing = function(stuff) {       // Things - "constructor" function. By convention: they are kept in variables with a capitalized name
    this.status = stuff;

    Thing.prototype.status2 = 2;            // every object is linked to prototype object
    Thing.prototype.getStatus = function() {
        return this.status;     // from prototype object we have access to "this."
    }
};

var thing = new Thing("stuff");  // because of "new" will return an object
console.log(thing.status);
console.log(thing.status2);//
console.log("Thing.prototype:" + JSON.stringify(Thing.prototype)); // { status2: 2 }   (no 'status' here)
console.log("thing.getStatus(): " + thing.getStatus());


// 4. Apply Invocation Pattern

console.log("\n#3:");

var fun = function(a, b) {
    console.log("this:" + JSON.stringify(this) ); // {"a":"a"}
    return a+b;
};
                 // this, arg array
var sum = fun.apply({a:"a"}, [1,2]);  // function can have methods. 'apply' is function's method

console.log("sum: " + sum);




