/* The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. 
The first two values in the sequence are 0 and 1 (essentially 2 base cases).
 Each subsequent value is the sum of the previous two values, so the whole sequence is: 
 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.

Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of 
the sequence. The method must be able to handle invalid input (e.g. negative numbers) */

let fibonacciNumbers: number[] = [0, 1]
function countTheFibonacci(n: number): number {
    console.log("number is " + n);

    if (n < 0) {
        console.log("you should give a positive integer");
        return 0;
    } else if (n === 0) {
        console.log("else if ág");
        console.log("number is " + n);
        return 0;
    } else if (n === 1) {
        console.log("else if ág");
        console.log("number is " + n);
        return 1;
    }
    else {
        console.log("else ág");
        let newFibonacciNumber: number = countTheFibonacci(n - 1) + fibonacciNumbers[n - 2];
        fibonacciNumbers.push(newFibonacciNumber);
        console.log(fibonacciNumbers);
        console.log("number is " + n);
        return newFibonacciNumber;
    }
}

console.log("fibonacci : " + countTheFibonacci(6));
//jó így, hogy a fibonaccinumbert a functionon kívül hozom létre? így működik...
