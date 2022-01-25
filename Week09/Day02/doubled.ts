// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

import fs from 'fs';
import os from 'os';

export function decryptDoubled(doubledTextFile: string){
    try {
        let fileContent: string[] = fs.readFileSync(doubledTextFile, 'utf-8').split(os.EOL);
        let decryptedContent: string = "";
        for (let j = 0; j < fileContent.length; j++) {
            let lineEnding: string = os.EOL;
            if (j === fileContent.length - 1) {
                lineEnding = "";
            }
            for (let i = 0; i < fileContent[j].length; i += 2) {
                decryptedContent += fileContent[j][i];
            }
            decryptedContent += lineEnding;
        }

        fs.writeFileSync("output.txt", decryptedContent);
    } catch (error) {
        return "File not found";
    }
}

decryptDoubled("duplicated-chars.txt");


/* gradescope előtti megoldás
const fs5 = require('fs');

export function decryptDoubled(doubledTextFile: string): string {
    try {
        let fileContent: string = fs5.readFileSync(doubledTextFile, 'utf-8');
        let decryptedContent: string = "";
        for (let i = 0; i < fileContent.length; i += 2) {
            decryptedContent = decryptedContent + fileContent[i];
        }
        fs5.writeFileSync("output.txt", decryptedContent);
        return "File is decrypted";
    } catch (error) {
        return "File not found";
    }
} */

/* nem az én megoldásom, de tetszik:
function decryptDoubled (filename: string): void {
    let contentAsArray: string [] = fs.readFileSync(filename, 'utf-8').split("").filter((element: string,  i:number)=>!(i%2===0))
    let contentAsString: string = contentAsArray.join("");
    fs.writeFileSync('output.txt', contentAsString)

}
decryptDoubled('duplicated-chars.txt') */