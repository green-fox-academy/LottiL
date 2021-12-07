// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(num1: number): number {
    let FactorialOfNum: number = 1
    for (let i = 1; i <= num1; i++) {
        FactorialOfNum = FactorialOfNum * i;
    }
    return FactorialOfNum;
}
console.log(calculateFactorial(0));