// #closure

console.log("\n:1 ----");

// 1. closure - is is a place where "var" is stored for the functions which has access to it
function fooX(x) {
    var global = 1;
    function fooY(y) {
        global = global + 2;  // 1 + 2 = 3                  // it creates a closure and put new new 'global' var
        // creates a copy of 'global' for "fooY" function
        console.log(x + y + global); // 1 + 2 + 3 = 6
    }
    fooY(2);
}
fooX(1); // 6
fooX(1); // still 6! but NOT 8,10, +2 etc.



// 2. closure is created not for one function only - where more than one function may access to
console.log("\n:2 ----");

function scope() {
    var num = 1;    // num is common for evey function
    one =   function() { num = num + 1; console.log( "one: " + num )};  // put 'num' to the closure
    two =   function() { num = num + 1; console.log( "two: " + num )};  // 'num' is already in the closure
    // "one" and "two" are all in the one scope in regard to "num"-closure
}

scope(); // setup global variables

one();  // "2"     | creates a closure    /
two();  // "3"     | use existing closure /

// 3. -- it is common way to come with mistake

console.log("\n:3 ----");

function buildList(list) {
    var result = [];
    for (var i=0; i< list.length; i++) {
        var item = 'item' + list[i];
        result.push( function() {
            console.log(item + ' ' + list[i]); // i = 3 !
        });
    }
    return result;  // returns list of functions
}

function testList() {
    var fnList = buildList([1,2,3]);    //
    for (var j=0; j<fnList.length; j++) {
        fnList[j]();   // in the moment of calling the function, "i" already = 3  !
    }
}

testList();  // expect "undefined" in output. since list[3] is out of the array

console.log(":4 ----");

// 4 - common use case:
function newClosure(someNum, someSettings) {

    var num = someNum;
    var anArray = [1,2,3];
    var settings = someSettings;

    return function(x) {
        num = num + x;      // creates a closure and puts 'num' to it
        anArray.push(num);
        console.log('num: ' + num + '\nanArray: ' + anArray.toString() + '\nsettings.someVar: ' + settings.someVar);
    }
}
var objSettings = {someVar: 4}; // this object will not be changes
console.log("> first call");
newClosure(4, objSettings)(1);  // num: 5; anArray: 1,2,3,5; ref.someVar: 4;
console.log("> second call");
newClosure(4, objSettings)(1);  // num: 5; anArray: 1,2,3,5; ref.someVar: 4;