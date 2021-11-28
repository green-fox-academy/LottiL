'use strict';

let lineCount2: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let star: string = "*";
let space: string = ""; 

for (let i = 0; i < (lineCount2 / 2) ; i++) {    
    space = space + " ";       
}
    
for (let i = 0; i < (lineCount2 / 2) ; i++) {    
    console.log(space + star); 
    space = space.substring(1)
    star = star + "**"
} 

space = space + " "
star = star.substring(2)
    
for (let i = 0; i < (lineCount2 / 2) - 1 ; i++) {    
    space = space + " "
    star = star.substring(2)
    console.log(space + star); 
}  