'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let aSide = 2.0;
let bSide = 3.0;
let cSide = 4.0;

console.log("Surface Area: " + 2 * ((aSide * bSide) + (bSide * cSide) + (aSide * cSide)));
console.log("Volume: " + aSide * bSide * cSide);
