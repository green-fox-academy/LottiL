//Write a function, that takes a string as an argument and returns a dictionary with all letters in the 
//string as keys, and numbers as values that shows how many occurrences there are.

export function countLetters(str: string): { [key: string]: number } {
    let dictionary: { [key: string]: number } = {};
    str.split('').forEach(char => {
        if (dictionary[char]) {
            dictionary[char] += 1;
        } else {
            dictionary[char] = 1;
        }
    })
    return dictionary;
}