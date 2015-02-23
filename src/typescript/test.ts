class A {

    private msg = " ";

    constructor (msg: string) {
        this.msg = msg;
    }

    hello(name:string):string {
        return "Hello, " + name.toUpperCase();
    }

    helloToBob(fn:Function): string {
        return fn.apply(this, ["Bob"]);
    }
}

var test = new A("some message");

var msg = test.hello("Bob1");

var msg2 = test.helloToBob(test.hello);

console.log(msg);