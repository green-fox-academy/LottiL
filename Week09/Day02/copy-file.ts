// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs4 = require('fs');

function copyContent(copyFrom: string, copyTo: string): boolean {
    try {
        let fileContent: string = fs4.readFileSync(copyFrom, 'utf-8');
        fs4.writeFileSync(copyTo, fileContent, { flag: "a" });
        return true;
    } catch (error) {
        return false;
    }
}

console.log(copyContent("multiple-lines.txt", "copy.txt"))