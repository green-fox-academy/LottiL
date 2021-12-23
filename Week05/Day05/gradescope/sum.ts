// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter
export function sum(num: number): number {
    let SumOfNum: number = 0
    for (let i = 0; i <= num; i++) {
        SumOfNum += i;
    }
    return SumOfNum;
}
console.log(sum(5));