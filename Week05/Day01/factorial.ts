// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(num1: number): number {
    let factorialOfNum: number = 1
    for (let i = 1; i <= num1; i++) {
        factorialOfNum = factorialOfNum * i;
    }
    return factorialOfNum;
}
console.log(calculateFactorial(0));