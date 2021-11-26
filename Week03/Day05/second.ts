'use strict';

let currentHours: number = 12;
let currentMinutes: number = 0;
let currentSeconds: number = 0;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let remainingSeconds: number
remainingSeconds = 24 * 60 * 60 - (currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds)

console.log(remainingSeconds)