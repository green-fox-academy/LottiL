// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio

const fs = require('fs');
const os = require('os');

let fileContent: string[] = fs.readFileSync("log.txt", 'utf-8').split(os.EOL);

function findUniqueIP(fileContentArray: string[]): string[] {
    let IPAddressArray: string[] = []
    for (let i = 0; i < fileContentArray.length; i++) {

        IPAddressArray.push(fileContentArray[i].split(" ")[8])
    }

    IPAddressArray = IPAddressArray.filter((element, i, a) => a.indexOf(element) == i);
    return IPAddressArray;
}

fs.writeFileSync("output_logs.txt", findUniqueIP(fileContent).join(os.EOL));

function calc_GET_POST_ratio(fileContentArray: string[]): number {
    let numberOfGETs: number = 0;
    let numberOfPOSTs: number = 0;
    for (let i = 0; i < fileContentArray.length; i++) {
        if (fileContentArray[i].split(" ")[11] === "GET") {
            numberOfGETs = numberOfGETs + 1;
        } else {
            numberOfPOSTs = numberOfPOSTs + 1;
        }
    }
    return numberOfGETs / numberOfPOSTs;
}

console.log(calc_GET_POST_ratio(fileContent));
