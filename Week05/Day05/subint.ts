'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)
// Example
//console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
//console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'

let foundNumbers:number[] = [];

function findMatchingIndexes(num:number,arr:number[]) :number[]{
    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]).search(String(num))>=0) {        
            foundNumbers.push(i);
        }       
    }     
    return foundNumbers;
}

console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
