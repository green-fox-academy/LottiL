// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function decryptReversed(reversedText: string) {
    try {
        let fileContent: string[] = fs.readFileSync(reversedText, 'utf-8').split("\r\n");
        let decryptedContent: string = "";

        for (let i = 0; i < fileContent.length; i++) {
            decryptedContent = decryptedContent + fileContent[i].split("").reverse().join("") + "\r\n";
        }
        fs.writeFileSync("output.txt", decryptedContent);
    } catch (error) {
        return "File not found";
    }
}

console.log(decryptReversed("reversed-lines.txt"))
