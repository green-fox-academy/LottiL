// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

const fs2 = require('fs');

function writeToFile(myName: string) {
    try {
        fs2.writeFileSync('d:\\Lotti\\GreenfoxA4M\\LottiL\\Week09\\Day02\\my-file.txt', myName, { flag: "a" });
    } catch (error) {
        console.error("Unable to write file: my-file.txt");
    }
}

writeToFile("\r\nSimon-Lamm Lotti");