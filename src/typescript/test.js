var A = (function () {
    function A(msg) {
        this.msg = " ";
        this.msg = msg;
    }
    A.prototype.hello = function (name) {
        return "Hello, " + name.toUpperCase();
    };
    A.prototype.helloToBob = function (fn) {
        return fn.apply(this, ["Bob"]);
    };
    return A;
})();
var test = new A("some message");
var msg = test.hello("Bob1");
var msg2 = test.helloToBob(test.hello);
console.log(msg);
//# sourceMappingURL=test.js.map