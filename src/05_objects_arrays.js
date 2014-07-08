// #object #array #copy #by-value #by-reference #delete #index #loop #for

var obj = {
    'one' : 1,
    'two': 2,

    f : function(name) { return "hello, " + name }
};

for (var p in obj) {        // "for in" loop does not guarantee on he order of names.

    console.log(p);                                                 // one, two, f      -- accessing the object's property names

    console.log(obj[p]);                                            // 1, 2, [Function] -- accessing the field value    -- treating object is as array of properties

    if (typeof  obj[p] == "function") console.log("f is here!");    // this way we can filter that types of fields we want
}

var length = Object.keys(obj).length;                               // there is no obj.length, so we have to use Object's method

for (var i = 0; i<length; i++) {                                    // guarantee the order of names
    var p = obj[i];                                                 // no, we can NOT access it by index - result of 'p' is "undefined"
}

// but of course we can do this:

console.log("\nconverting object to array:");

var ar = Object.keys(obj);              // converting to array

for (var i = 0; i <ar.length; i++) {    // this for-loop guarantees on the order of names. And of course array has "length" property
    var p = ar[i];                      // accessing by index
    console.log("ar(i): " + p);
}


console.log("\ndeleting:");

delete ar.one;         // deleting "one" property from he array/object  (array is an object as we already know)
delete ar.f;

console.log(ar.one);   // not it is "undefined"
console.log(ar.f);   // not it is "undefined"

console.log(obj.one);  // even though we deleted "one" from array, it is still lives in "object". Why? because it was copied "by value" since it is primitive Number
console.log(obj.f);    // Function was not deleted, since it was copied to array "by-reference"