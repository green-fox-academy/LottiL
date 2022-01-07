// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio

const fs = require('fs');
const os = require('os');

let fileContent: string[] = fs.readFileSync("log.txt", 'utf-8').split(os.EOL);





fs.writeFileSync("output.txt", );



