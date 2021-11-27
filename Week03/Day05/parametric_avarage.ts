'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5
let Sum: number = 0
let Average: number

for (let i: number = 1; i <= input; i++) {
    Sum += i
  }
  console.log("Sum: " + Sum); 
  console.log("Average: " + (Sum / input));

//console.log("Sum: " + (1 + input) / 2 * input)
//console.log("Average: " + (1 + input) / 2 );