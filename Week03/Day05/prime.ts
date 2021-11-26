'use strict';
let prime: number
let isPrime: boolean = true

prime = 863

for (let i: number = 2; i < prime; i ++) {
    if (prime % i === 0) {
        console.log (prime + " is not a prime number");
        isPrime = false;
        break;
    }
    
  }

if (isPrime) {
    console.log (prime + " is a prime number");
}