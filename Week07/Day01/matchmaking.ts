'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Expected output: ["Eve-Joe", "Ashley-Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane', 'lány1', 'lány2'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

export function match(girlArr: string[], boyArr: string[]): string[] {
    let girlsAndBoys: string[] = [];
    let tempArr: string[] = [];
    if (girlArr.length > boyArr.length) {
        join(girlArr, boyArr);
    } else {
        join(boyArr, girlArr);
    }

    function join(longerArr: string[], shorterArr: string[]) {
        for (let i = 0; i < shorterArr.length; i++) {
            tempArr.push(girlArr[i]);
            tempArr.push(boyArr[i]);
            girlsAndBoys.push(tempArr.join("-"));
            tempArr = [];
        }
        for (let i = 0; i < longerArr.length - shorterArr.length; i++) {
            girlsAndBoys.push(longerArr[shorterArr.length + i]);
        }
    }
    return girlsAndBoys;
}

console.log(match(girls, boys));

//amúgy concattal egyszerűbb lenne....