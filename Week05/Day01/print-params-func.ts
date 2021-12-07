// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(params1: number, params2?: number) {
    console.log(params1, params2);
}

printParams(1);
printParams(1, 2);