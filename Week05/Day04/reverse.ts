'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

export function reverse(toBeReversed: string): string {
    let splitted: string[] = toBeReversed.split("");
    let reversed: string[] = splitted.reverse();
    let reversedString: string = "";

    for (let i = 0; i < splitted.length; i++) {
        reversedString = reversedString + reversed[i];
    }
    return reversedString;
}

console.log(reverse(toBeReversed));