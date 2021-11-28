'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 5;

export function drawPyramid(lineCount: number) {

    let star: string = "*";
    let space: string = ""; 

    for (let j = 0; j < lineCount; j++) {    
        space = space + " ";       
    }
        
    for (let i = 0; i < lineCount; i++) {        
        console.log(space + star); 
        space = space.substring(1)
        star = star + "**"
    }  
}
