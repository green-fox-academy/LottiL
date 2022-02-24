/* Create a function that takes one string and one integer array as parameters and returns the occurrences of the strings that are present on the indexes of the second array
Input: ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f",  "p"] and [2, 5, 6 ]

Output:
{
   "f": 3,
   "z": 1,
  "p": 3
} */

export function countOccurrences(letters: string[], indexes: number[]): { [key: string]: number } {
    let characters: string[] = [];
    let occurrencesOfCharacters: { [key: string]: number } = {};

    for (const char of letters) {
        for (const num of indexes) {
            if (char === letters[num])
                characters.push(char);
        }
    }

    characters.forEach(char => {
        if (occurrencesOfCharacters.hasOwnProperty(char)) {
            occurrencesOfCharacters[char] += 1;
        } else {
            occurrencesOfCharacters[char] = 1;
        }
    })

    return occurrencesOfCharacters;
}

let letters: string[] = ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f", "p"];
let indexes: number[] = [2, 5, 6];

console.log(countOccurrences(letters,indexes));