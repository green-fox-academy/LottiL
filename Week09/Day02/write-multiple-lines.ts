
// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// - The path parameter should be a string that describes the location of the file you wish to modify.
// - The word parameter should also be a string that will be written to the file as individual lines.
// - The number parameter should describe how many lines the file should have.

// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'.
// The function should not raise any errors if it could not write the file.

const fs3 = require('fs');

function writeMultipleLines(path: string, word: string, lineNumber: number) {
    try {
        fs3.writeFileSync(path, word.concat("\r\n").repeat(lineNumber), { flag: "a" });
    } catch (error) {
        console.error("Nincs itt semmi hiba, csak nem működik");
    }
}

writeMultipleLines('d:\\Lotti\\GreenfoxA4M\\LottiL\\Week09\\Day02\\multiple-lines.txt', 'apple', 5);