// Create a method that decrypts encoded-lines.txt
//ascii characters +1 


import fs from 'fs';
import os from 'os';

export function encodeLines(fileName: string){
    let fileContent: string[] = [];
    let newFileContent: string[] = [];
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split(os.EOL);
    } catch (error) {
        return "File not found";
    }
    
    let wordsInFile: string[] = [];
    fileContent.forEach(element => {
        let lines: string[] = element.split(" ");
        lines.forEach(w => {
            wordsInFile.push(w);
        })
    });

    let charCode:number[][]=[];
    wordsInFile.forEach(w=>{
        let tempArray:number[]= [];
        for (let i = 0; i < w.length; i++) {
            tempArray.push(w.charCodeAt(i)-1);            
        }   
        charCode.push(tempArray);     
    })

    for (let i = 0; i < charCode.length; i++) {
        let word : string = "";
        for (let j = 0; j < charCode[i].length; j++) {            
            word = word.concat(String.fromCharCode(charCode[i][j]));
        }
        newFileContent.push(word);
    }  
    
    fs.writeFileSync("output.txt", newFileContent.join(" ")); 
}

encodeLines("encoded-lines.txt")