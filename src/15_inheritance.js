// Prototypical inheritance is conceptually simpler than classical inheritance:
// a new object can inherit the properties of old/existing one.

// The classification process of breaking an application down into a set of nested
// abstract classes can be completely avoided.

// add new method to Object (same as Object.create)
if (typeof Object.beget != "function") {   // Helper method: created a new object as a prototype
    Object.beget = function(o) {
        var F = function() {};
        F.prototype = o;
        return new F();
    }
}

var myMammal = {
    name : "Mammal's name",
    getName : function() {
        return this.name;       // since we are inside object, "this" refers to it (but not on Global object)
    },
    says : function () {
        return this.saying || "nothing to say";  // "saying" is like Abstract property that we expect may be implemented in child Objects
    }
};

//var myCat = Object.beget(myMammal); // creates new object based on passed one

var myCat = Object.create(myMammal); // creates new object based on passed one
myCat.name = "Cat's name";
myCat.saying = "Meow"; //      we would say: "implements abstract property 'saying'"
myCat.getName = function() {
    return this.name;
};

//console.log(  myCat.says() );


// -- Another example of create()

var userB = {
    sayHello: function() {
        return 'Hello '+ this.name
    }
};

var bob = Object.create(userB, {
    'id' : {
        value: "id",
        enumerable:true // writable:false, configurable(deletable):false by default
    },
    'name': {
        value: 'Bob',
        enumerable: true
    }
});

console.log(  bob.sayHello() );