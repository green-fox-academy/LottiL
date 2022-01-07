// Create a method that decrypts reversed-order.txt

const fs1 = require('fs');
const os1 = require('os');

function decryptReversedOrder(reversedTextFile: string): string {
    try {
        let fileContent: string[] = fs1.readFileSync(reversedTextFile, 'utf-8').split(os1.EOL);
        let decryptedContent: string = "";

        /* for (let i = 0; i < fileContent.length; i++) {            
            decryptedContent = decryptedContent + fileContent[fileContent.length-i-1] + os1.EOL;
        } */

        for (let i = fileContent.length - 1; i >= 0; i--) {
            let lineEnding: string = os1.EOL;
            if (i === 0) {
                lineEnding = "";
            }
            decryptedContent = decryptedContent + fileContent[i] + lineEnding;
        }

        fs1.writeFileSync("output1.txt", decryptedContent);
        return "File is decrypted";
    } catch (error) {
        return "File not found";
    }
}

console.log(decryptReversedOrder("reversed-order.txt"))
