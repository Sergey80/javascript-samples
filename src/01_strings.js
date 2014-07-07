// #string #char #unicode #length #toUpperCase

var str1 = "first";     // " may used
var str2 = 'second';    // ' may used

// there is no "char" type in JS

var char = "kind of char";            // there is not char type as was said

// unicode (16 bit)

var uni = "\u0041";                   // use unicode

if ("A" == uni) console.log("yes");   // =yes

var three = "yes".length;             // length property

console.log (three);                  //= 3.

var b = "a" + "b" + "c" === "abc";    // true

console.log(b);                       // true
console.log("abc".toUpperCase());     // "ABC"