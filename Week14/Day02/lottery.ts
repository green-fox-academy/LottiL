// Create a method that find the 5 most common lottery numbers in lottery.csv

import fs from 'fs';
import os from 'os';

export function findFiveMostCommonNumbers(fileName: string)/* : number[] */ {
    let fileContent: string[] = [];
    let result: number[]= [];
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split(os.EOL);
    } catch (error) {
        console.error("The Filename is not valid");
    }
    let numbers: number[] = [];
    fileContent.forEach(row => {
        let oneRow: string[] = row.split(";");
        for (let i = 11 ; i < 16; i++) {            
            let num :number = parseInt(oneRow[i]);
            numbers.push(num);           
        }
    })
    let sortedNumbers: number[] = numbers.sort((a,b) => a-b);

    let numberOfNumbers : {[key:string]:number}[] = []

    numberOfNumbers.push({ number: sortedNumbers[0], numberOfCharacter: 1 });
    for (let i = 0; i < sortedNumbers.length - 1; i++) {
        if (sortedNumbers[i] === sortedNumbers[i + 1]) {
            numberOfNumbers[numberOfNumbers.length - 1].numberOfCharacter += 1;
        } else {
            numberOfNumbers.push({ number: sortedNumbers[i + 1], numberOfCharacter: 1 });
        }
    }

    numberOfNumbers.sort((a, b) => b.numberOfCharacter - a.numberOfCharacter);

    return numberOfNumbers.slice(0,5);

    /* return result; */
}

console.log(findFiveMostCommonNumbers("lottery.csv"))