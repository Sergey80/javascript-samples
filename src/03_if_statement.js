// #if #equal #== #=== #falsy #null #undefined #NaN

var b1 = true;
var b2 = false;
var b3 = null;

// null is neither false or true

if (b1) console.log("yes");                             // yes
if (b2) console.log("yes");
if (b3) console.log("yes");


// _falsy_ vs false

// NaN
if (NaN == false) console.log("NaN is falsy but not a false");

// empty string
if ("" == false)  console.log("empty string is falsy but not a false");

// zero
if (0 == false)   console.log("zero is falsy but not false");                 // zero

// undefined vs false

var a;
if (a == undefined) console.log("yes, 'a' was not defined");
if ( !(a == false) ) console.log("undefined 'a' var is NOT _falsy_"); // !

// so then
if ( ! (undefined == false) ) console.log("undefined is NOT falsy");
// but this
if ( !undefined )             console.log("undefined is falsy but not a false");          // well !undefined  = means defined which is 'true' :)

// null vs undefined

if (undefined == null)   console.log("undefined is LIKE null");
if (undefined === null)  console.log("but undefined is NOT null");

// undefined vs 0
if ( !(undefined == 0) ) console.log("undefined is NOT LIKE 0");

// null vs 0
if (! (null == 0) )      console.log("nul is NOT like 0");
