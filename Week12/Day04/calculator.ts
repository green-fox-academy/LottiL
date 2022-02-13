'use strict';
// Create a simple calculator application which reads parameters from the prompt
// and prints the result back to the prompt
// It should support one of the following operators: +, -, *, /, %
// and two operands
// The format of the input expressions must be: {operator} {operand} {operand}
// Input examples:
//    "+ 3 3" (the result will be 6)
//    "* 4 4" (the result will be 16)
// To make it work create a method named "calculate()" and use the Scanner class
// to get input from the user

// The process should work like this:
// - Start the program
// - Print: "Please type in the expression:"
//   (Wait for the user input)
// - After receiving the input print the result number to the prompt
// - Exit the program

const myArgs :string[]= process.argv.splice(2); // Just a helper for you to get started

if (myArgs.length === 3) {
    try {
        if (!isNaN(Number(myArgs[1])) || !isNaN(Number(myArgs[2]))){
            let num1: number = parseInt(myArgs[1]);
            let num2: number = parseInt(myArgs[2]);
            if (myArgs[0] === '+') {
                console.log(num1+num2);
            } else if (myArgs[0] === '-') {
                console.log(num1 - num2);;
            } else if (myArgs[0] === '*') {
                console.log(num1 * num2);
            } else if (myArgs[0] === '/') {
                console.log(num1 / num2);
            } else {
                throw new Error("Unsupported argument");
            }           
        } else {
            throw new Error("you need two numbers")
        }

    } catch (error) {
        console.error(error);
    }

} else {
    console.log('Please type in the expression: "operand", number, number');
}

console.log('Input params are', myArgs);