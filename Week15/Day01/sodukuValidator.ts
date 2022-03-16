//Write a function that receives a completed Sudoku board as a 2D array, 
//and returns whether it is a valid solution or not.

export function validateSoduku(matrix: number[][]): boolean{
    let sumOfNumbers: number = 45;
    for (let i = 0; i < matrix.length; i++) {
        let sumOfRow = 0;
        let sumOfColumn = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumOfRow += matrix[i][j];
            sumOfColumn += matrix[j][i];
        }
        console.log("row " + sumOfRow);
        console.log("column " + sumOfColumn);
        if (sumOfRow!==sumOfNumbers || sumOfColumn !==sumOfNumbers) {            
            return false;
        }
                
    }

    return true;
}

let validSoduku: number[][]=
[[5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]

  let notValidSoduku: number[][]=
  [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 6, 3, 3, 4, 2, 5, 6, 5],
  [8, 5, 9, 7, 6, 1, 6, 2, 7],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 4, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 2, 3, 4, 8, 1, 6, 7, 9]]

  console.log(validateSoduku(notValidSoduku))