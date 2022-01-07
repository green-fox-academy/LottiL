// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
const os = require('os');

function decryptReversed(reversedTextFile: string): string {
    try {
        let fileContent: string[] = fs.readFileSync(reversedTextFile, 'utf-8').split(os.EOL);
        let decryptedContent: string = "";

        for (let i = 0; i < fileContent.length; i++) {
            let lineEnding1: string = os.EOL;
            if (i === fileContent.length - 1) {
                lineEnding1 = "";
            }
            decryptedContent = decryptedContent + fileContent[i].split("").reverse().join("") + lineEnding1;
        }
        fs.writeFileSync("output.txt", decryptedContent);
        return "File is decrypted";
    } catch (error) {
        return "File not found";
    }
}

console.log(decryptReversed("reversed-lines.txt"))
