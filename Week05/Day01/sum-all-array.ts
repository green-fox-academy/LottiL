// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

let numbers5: number[] = [3, 4, 5, 6, 7];
let sum5: number = 0;

for (let i = 0; i < numbers5.length; i++) {
    sum5 = sum5 + numbers5[i];
}

console.log(sum5);