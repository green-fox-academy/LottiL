'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

export function drawSquare(lineCount: number) {
    
    let percent: string = "";
    let center: string = ""; 
        
    for (let i = 0; i < lineCount ; i++) {   
        percent = percent + "%" 
    }  
    
    console.log(percent)

    for (let i = 0; i < lineCount-2 ; i++) { 
        let space: string = "";
        for (let j = 0; j < lineCount-2 ; j++){                
            space =  space + " "                
        }
        center = "%" + space + "%"
        console.log(center)               
    } 

    console.log(percent)
}