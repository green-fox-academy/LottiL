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

    let numberOfStar: number = 1
    let numberOfSpace: number = lineCount - 1    
        
    for (let i = 0; i < lineCount; i++) {
        let star: string = "";
        let space: string = "";

        for (let j = 0; j < numberOfSpace; j++) {    
            space = space + " ";       
        }
        for (let j = 0; j < numberOfStar; j++) {    
            star = star + "*";
        }
        console.log(space + star); 
        numberOfStar = numberOfStar + 2; 
        numberOfSpace = numberOfSpace - 1;
    }  
}
