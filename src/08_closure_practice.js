// #closure #private

// 1. private methods

var factory = function() {

    var private = 0;                // 'private field'

    function add(num) {             // 'private method'
        private = private + num;                            // remembers / copies "private" value to the closure scope (if it is not copied yet)
    }

    return {                        // returns the object
        up : function() {
            add(1);
        },
        down: function() {
            add(-1);
        },
        get: function() {
            return private;
        }
    }
};

var obj = factory();

var r1 = obj.get();  //0

obj.up();

var r2 = obj.get(); // 1

obj.up();

var r3 = obj.get(); // 2

console.log(r1 + " " + r2 + " " + r3);

//
var obj2 = factory();

console.log( obj2.get() );      // 0     <-- this is where "closure" worked out
