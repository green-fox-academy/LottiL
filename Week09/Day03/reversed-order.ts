// Create a method that decrypts reversed-order.txt

const fs1 = require('fs');

function decryptReversedOrder(reversedText: string) {
    try {
        let fileContent: string[] = fs1.readFileSync(reversedText, 'utf-8').split("\r\n");
        let decryptedContent: string = "";

        for (let i = 0; i < fileContent.length; i++) {            
            decryptedContent = decryptedContent + fileContent[fileContent.length-i-1] + "\r\n";
        }
        fs1.writeFileSync("output1.txt", decryptedContent);
    } catch (error) {
        return "File not found";
    }
}

console.log(decryptReversedOrder("reversed-order.txt"))
