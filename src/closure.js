// #closure

console.log("\n:" + 1);

// 1. closure - is just a local copy of global var in some function
function fooX(x) {
    var global = 1;
    function fooY(y) {
        global = global + 2;  // 1 + 2 = 3
        // creates a copy of 'global' for "fooY" function
        console.log(x + y + global); // 1 + 2 + 3 = 6
    }
    fooY(2);
}
fooX(1); // 6
fooX(1); // still 6! but NOT 8,10, +2 etc.

// 2. -- does copy the "var" at them moment of calling a function
console.log("\n:" + 2);

function say2() {
    var num = 1;
    var doLog = function() {console.log(num);};
    num =  num + 1;
    return doLog;
}

var doLog = say2();
console.log(doLog); // [Function]
doLog(); // =2,
         // it does copy of "num"
         // _at the moment_ of invoking the function say2().doLog()

// 3. -- what if many function access the same "var"
console.log("\n:" + 3);

function many() {
    var num = 1;    // num is common for evey function
    one =   function() { num = num + 1; console.log( "one: " + num )};
    two =   function() { num = num + 1; console.log( "two: " + num )};
    // "one" and "two" are all in the one scope in regard to "num"-closure
}

many(); // setup global variables

one();  // "2"     | one
two();      // "3" | and "two" uses same "shared" "num" "closure" variable
// that is quite dangerous - we should NOT expect that there is one copy to one function!
// so, closure in JS is created not one per function, but one per function scope..if you will

// 4. -- List of function in an array & for-loop.
//    -- That is interesting ! Even more unexpected

console.log("\n:4");

function buildList(list) {
    var result = [];
    for (var i=0; i< list.length; i++) {
        var item = 'item' + list[i];
        result.push( function() {
            // i = 2  // if uncomment - then it will take a copy of i for that function
            console.log(item + ' ' + list[i]); // "i" will be = 3 in any time !
        });
    }
    return result;  // returns list of functions
}

function testList() {
    var fnList = buildList([1,2,3]);    //
    for (var i=0; i<fnList.length; i++) {
        fnList[i](); // calling each function, one after another
            // in the moment of calling the function, "i" already = 3
    }
}

testList();  // expect "undefined" in output. since list[3] is out of the array
