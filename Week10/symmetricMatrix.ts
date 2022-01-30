/* Create a function named isSymmetric that takes an n×n integer matrix (two dimensional array/list) as a parameter 
and returns true if the matrix is symmetric or false if it is not.
Symmetric means it has identical values along its diagonal axis from top-left to bottom-right, as in the first example. */

export function isSymmetric(matrix: number[][]): boolean {
    let isSymmetric: boolean = true;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                isSymmetric = false;
                break;
            }
        }
    }
    return isSymmetric;
}

let example1: number[][] = [
    [1, 0, 1],
    [0, 2, 2],
    [1, 2, 5]
]

let example2: number[][] = [
    [7, 7, 7],
    [6, 5, 7],
    [1, 7, 1]
]

console.log(isSymmetric(example2));
console.log(isSymmetric(example1));