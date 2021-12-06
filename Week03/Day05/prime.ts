'use strict';
let myNumber: number;
let isPrime: boolean = true;

myNumber = 4

for (let i: number = 2; i < myNumber; i ++) {
    if (myNumber % i === 0) {
        console.log (myNumber + " is not a prime number");
        isPrime = false;
        break;
    }
}

if (myNumber === 1) {
    console.log (myNumber + " is not a prime number"); 
}
else if (isPrime) {
    console.log (myNumber + " is a prime number");
}   