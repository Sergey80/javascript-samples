// what does "new" do

// http://zeekat.nl/articles/constructors-considered-mildly-confusing.html

/*
1. It creates a new object. The type of this object, is simply object.

2. It sets this new object's internal, inaccessible, [[prototype]]
    property to be the constructor function's external, accessible,
    prototype object (every function object automatically has a prototype property).

3. It executes the constructor function, using the newly created object whenever this
   is mentioned.

4. It returns the newly created object, unless the constructor function returns a
   non-primitive value. In this case, that non-primitive value will be returned.
*/

