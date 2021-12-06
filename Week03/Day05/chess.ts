'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %

let lineCount1: number = 8;

let even: string = "";
let odd: string = "";

for (let i = 0; i < lineCount1; i++) {
    if (i % 2 === 0) {
        even = even + " ";
        odd = odd + "%";
    }
    else {
        even = even + "%";
        odd = odd + " ";
    }
}

for (let i = 1; i <= lineCount1; i++) {
    if (i % 2 === 0) {
        console.log(even);
    }
    else {
        console.log(odd);
    }
}