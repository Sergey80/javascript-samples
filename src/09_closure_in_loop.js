// #closure #loop

function fun() {

   var stuff = ["one", "two", "three"];

   var funs = [];

   for (var i = 0; i < stuff.length; i++) {

       var s = stuff[i];

       var f = function() {console.log(s)};

       funs.push (f); // at the moment of call it will capture the very last value of "s" which will be "three"
   }

   return funs;

}

var funs = fun();

funs[0]();  // three
funs[1]();  // three
funs[2]();  // three

// So all are "three" - this is very common mistake wile working with JS closure