// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//  
// - Print this two dimensional list to the output

let lineCount: number = 4;
let matrix: number[][] = [];

for (let i = 0; i < lineCount; i++) {
    matrix[i] = [];
    for (let j = 0; j < lineCount; j++) {
        if (i === j) {
            matrix[i][j] = 1;
        }
        else
            matrix[i][j] = 0;
    }
}

for (let i = 0; i < lineCount; i++) {
    console.log(...matrix[i]);
}