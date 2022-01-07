// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs1 = require('fs');
const os = require('os');

function countLines(fileName: string): number {

    try {
        return fs1.readFileSync(fileName, 'utf-8').split(os.EOL).length;
    } catch (error) {
        return 0;
    }
}

console.log(countLines("my-file1.txt"));