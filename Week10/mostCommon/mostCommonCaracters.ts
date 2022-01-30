/* Write a function named getTwoMostCommonCharacters that takes a filename as a parameter, 
and returns the 2 most common characters and their occurrences in the file's content.
If the file does not exist throw an exception with the following message: "File does not exist!"
return with an object */

import fs from 'fs';
import os from 'os';

type result = {
    character: string,
    numberOfCharacter: number,
}

export function getTwoMostCommonCharacters(filename: string): result[] {
    let fileContent = "";
    try {
        fileContent = fs.readFileSync(filename, 'utf-8');
    } catch (error) {
        throw new Error("File does not exist!");
    }

    let arrayOfLines: string[] = fileContent.split(os.EOL);
    let arrayOfCharacters: string[] = [];
    arrayOfLines.forEach(line => {
        arrayOfCharacters = arrayOfCharacters.concat(line.split(""));
    });

    let newArrayOfCharacters: string[] = [];

    arrayOfCharacters.forEach(char => {
        newArrayOfCharacters.push(char.toLowerCase());
    });

    newArrayOfCharacters.sort();

    let characters: result[] = [];

    characters.push({ character: newArrayOfCharacters[0], numberOfCharacter: 1 });
    for (let i = 0; i < newArrayOfCharacters.length - 1; i++) {
        if (newArrayOfCharacters[i] === newArrayOfCharacters[i + 1]) {
            characters[characters.length - 1].numberOfCharacter += 1;
        } else {
            characters.push({ character: newArrayOfCharacters[i + 1], numberOfCharacter: 1 });
        }
    }

    characters.sort((a, b) => b.numberOfCharacter - a.numberOfCharacter);


    return characters.slice(0, 2);

}

console.log(getTwoMostCommonCharacters("countchar.txt"))