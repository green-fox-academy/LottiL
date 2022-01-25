// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file's content

import fs from 'fs';
import os from 'os';

export function ticTacResult(fileName: string): string {
    let ticTac: string[][] = [];
    fs.readFileSync(fileName, 'utf-8').split(os.EOL).forEach(element => {
        ticTac.push(element.split(""));
    });

    for (let i = 0; i < ticTac.length; i++) {
        if (ticTac[i][0] === ticTac[i][1] && ticTac[i][0] === ticTac[i][2]) {
            return ticTac[i][0];
        } else if (ticTac[0][i] === ticTac[1][i] && ticTac[0][i] === ticTac[2][i]) {
            return ticTac[0][i];
        }
    }

    if (ticTac[0][0] === ticTac[1][1] && ticTac[0][0] === ticTac[2][2]) {
        return ticTac[0][0];
    } else if (ticTac[0][2] === ticTac[1][1] && ticTac[0][2] === ticTac[2][0]) {
        return ticTac[0][2];
    }
    return "Draw";
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"

