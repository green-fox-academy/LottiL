// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

const fs5 = require('fs');

function decryptDoubled(doubledTextFile: string): string {
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
}

console.log(decryptDoubled("duplicated-chars.txt"))

/* nem az én megoldásom, de tetszik:
function decryptDoubled (filename: string): void {
    let contentAsArray: string [] = fs.readFileSync(filename, 'utf-8').split("").filter((element: string,  i:number)=>!(i%2===0))
    let contentAsString: string = contentAsArray.join("");
    fs.writeFileSync('output.txt', contentAsString)

}
decryptDoubled('duplicated-chars.txt') */