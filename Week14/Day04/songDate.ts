//Write a method which can read and parse a file containing information about songs. The method should receive one string parameter: the name of the file. 
//The method should handle possible exceptions by printing messages to the standard output. It should return with the year which produced the most songs.

import fs from 'fs';
import os from 'os';

export function findTheYearWhenMostSongsWasWritten(fileName: string): string {
    let fileContent: string[] = [];
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split(os.EOL);
    } catch (error) {
        console.error("The Filename is not valid");
        return "";
    }

    let years: string[] = [];

    try {
        fileContent.forEach(row => {
            let oneRow: string[] = row.split(";");
                        
            if(oneRow[3]===undefined){
                console.error("Something went wrong, in the "+ row[0] + ". row.");
            } else {
                years.push(oneRow[3]); //oneRow.length-1
            }
        }) 
    } catch (error) {
        console.error("")
        return"";
    }
    //ez így se return-öl, kipróbálni for ciklussal, return-el is.

    let numberOfYears: { [key: string]: number } = {}
    years.forEach(year => {
        if (numberOfYears.hasOwnProperty(year)) {
            numberOfYears[year] += 1;
        } else {
            numberOfYears[year] = 1;
        }
    })
    const sorted = Object.entries(numberOfYears).sort(([, a], [, b]) => b - a);

    return sorted[0][0];
}

console.log(findTheYearWhenMostSongsWasWritten("songs.csv"))