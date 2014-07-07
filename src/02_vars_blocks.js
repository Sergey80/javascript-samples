// #var #statement #constant #semicolom #block #scope

// about vars

var a,b,c = 1;                     // can define all at once

// JS does not have constants
// final var c;                   // this will not work like in Java
// val d;                         // or like in Scala

if (a == b == c) console.log("all are equal");

// semicolon - yes - best practice says that better put semicolon in the end of each statement;



// about blocks

var v1 = 1;
{
    var v1 = 2;
}
console.log(v1);        // yeah. blocks does not create new scope in JS