// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - and returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, the result should be either 2006 or 2016.

import fs from 'fs';
import os from 'os';

export function findTheYearWhenMostBirthsHappened(fileName: string): string {
    let fileContent: string[] = [];
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split(os.EOL);
    } catch (error) {
        console.error("The Filename is not valid");
        return "";
    }
    let birthDates: string[] = [];
    fileContent.forEach(row => {
        let oneRow: string[] = row.split(";");
        birthDates.push(oneRow[1])
    })
    
    let birthYears: string[] = [];
    birthDates.forEach(date => {
        let oneDate: string[] = date.split("-");
        birthYears.push(oneDate[0])
    })

    let numberOfBirthYears: { [key: string]: number } = {}
    birthYears.forEach(year => {
        if (numberOfBirthYears.hasOwnProperty(year)) {
            numberOfBirthYears[year] += 1;
        } else {
            numberOfBirthYears[year] = 1;
        }
    })
    const sorted = Object.entries(numberOfBirthYears).sort(([, a], [, b]) => b - a);

    return sorted[0][0];
}

console.log(findTheYearWhenMostBirthsHappened("births.csv"))

//hiába parseInt() a 29. sorban, a sortolásnál újra string lett????