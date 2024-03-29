'use strict';

// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        const element = callback(array[i]);
        output.push(element);
    }
    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
    let removedSecondLetter = '';
    let characters = word.split('');
    for (let i = 0; i < characters.length; i++) {
        if (i % 2 !== 1) {
            removedSecondLetter += characters[i];
        }
    }
    return removedSecondLetter;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']