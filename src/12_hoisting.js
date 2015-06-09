var test1 = function() {
    a = 1;

    console.log("a:" + a);
};


var test2 = function() {
    b = 1;
    console.log("b: " + b);
    var b;
};

var test3 = function() {
    c = "c";

    console.log(c); // will print "c" not "blah"

    var c = "blah";

};

//console.log(a);
//console.log(b);

test1();
test2();
test3();

// in "strict" mode - it is impossible to use variable before defined it. Anyway.