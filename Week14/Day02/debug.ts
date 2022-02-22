/* Write a method that receives a filename as a string as parameter
  and returns the words present (as a list) in the file which either start with
  "de" or ends with "bug". The logic shall not be case sensitive.

  In case of any errors during file reading and data parsing the method
  shall display: "Cannot read the bloody file" */

import fs from 'fs';
import os from 'os';

export function findDebug(fileName: string): string[] {
    let fileContent: string[] = [];
    let result: string[] = [];
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split(os.EOL);
    } catch (error) {
        console.error("Cannot read the bloody file");
        return [];
    }
    let wordsWithOutPoint: string[] = [];
    fileContent.forEach(element => {
        let words: string[] = element.split(".");
        words.forEach(w => {
            wordsWithOutPoint.push(w);
        })
    });
    let wordsInFile: string[] = []
    wordsWithOutPoint.forEach(element => {
        let words: string[] = element.split(" ");
        words.forEach(w => {
            wordsInFile.push(w);
        })
    });

    wordsInFile.forEach(w => {
        let wordsLength: number = w.length - 3;
        let word: string = w.toLowerCase();

        if (word.includes("de", 0) && !word.includes("bug", wordsLength)) {
            result.push(w);
        } else if (word.includes("bug", wordsLength)) {
            result.push(w);
        }
    })
    return result;
}

console.log(findDebug("debug.txt"))