'use strict';
// Check if "listOfNumbers" contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// It should return "true" if it contains all elements, otherwise returns "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(listOfNumbers: number[]) :boolean{
    let isInList : boolean = true;
    let numbersToCheck : number [] = [4,8,12,16];  // ezt paraméterként is megadhatnám
    for (let i = 0; i < numbersToCheck.length; i++) {
        if (!listOfNumbers.includes(numbersToCheck[i])) {
            isInList = false;
            break;
        }        
    }
    return isInList;
}
console.log(checkNums(listOfNumbers));