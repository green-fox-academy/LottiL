// Create a function that receives an nxm matrix of numbers
// and returns an array containing the average of each column 

export function calculateColumnAverage(matrix: number[][]): number[] {
    let columnAverage: number[] = [];
    if (matrix[0]) {
        for (let i = 0; i < matrix[0].length; i++) {
            columnAverage[i] = 0;
            for (let j = 0; j < matrix.length; j++) {
                let oneColumnAverage = Math.round(matrix[j][i] / matrix.length * 100)/100;
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
                columnAverage[i] += oneColumnAverage;
            }
        }
    }
    return columnAverage;
}

let matrix: number[][] = [
    [3, 4, 5, 6],
    [1, 2, 3, 2],
    [2, 3, 1, 4]
]

console.log(calculateColumnAverage([]))