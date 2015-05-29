// #function #arguments #this

var fun = function(a,b) {       // two additional params are passing into the function:
                                    // 1. arguments
                                    // 2. this


    console.log("args.length: " + arguments.length);  // 2

    return arguments[0] + arguments[1];  // a + b
};

console.log(fun(1,2));

