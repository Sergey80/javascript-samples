// #classes #prototype

// Defining a class
// First version
var scope1 = function () {

    console.log("Scope #1");

    function Apple(type) {     /* Constructor function. Supposed to be called with "new". By convention starts with capital letter  */
        this.type = type;
        this.color = "red";
        this.getInfo = function () { // getInfo() is recreated every time you create a new object.
            return this.color + ' ' + this.type + ' apple';
        };
    }
    Apple.prototype.getInfo2 = function() { // it's created once you call "new" then for next "new" that function is already created.
        return this.color + ' ' + this.type + ' apple';
    };

    var apple1 = new Apple("Macintosh1");
    var apple2 = new Apple("Macintosh2");

    console.log(apple1); // prints all properties
    console.log(apple1.prototype); // undefined

    console.log(apple1.getInfo());  // "red Macintosh1 apple"
    console.log(apple1.getInfo2()); // "red Macintosh1 apple"

    console.log(apple2.getInfo());  // "red Macintosh2 apple"
    console.log(apple2.getInfo2()); // "red Macintosh2 apple" (same but works faster)

};


scope1();