// Create a function that receives an n x m number matrix
// and returns an array containing the sum of each line
//[3, 4, 5, 6]
//[1, 2, 3, 2]
//returns 
//[18, 8]

export function calculateSumOfMatrix(matrix: number[][]): number[] {
    let matrixSum: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
        matrixSum[i] = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            matrixSum[i] += matrix[i][j];
        }
    }
    return matrixSum;
}

let matrix: number[][] = [
    [3, 4, 5, 6],
    [1, 2, 3, 2]
]

//console.log(calculateSumOfMatrix(matrix))