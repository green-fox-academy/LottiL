'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let percent: string = "";
let center: string = ""; 
        
for (let i = 0; i < lineCount ; i++) {   
    percent = percent + "%";
}  
console.log(percent);

for (let i = 0; i < lineCount-2 ; i++) { 
    let space: string = "";
    let space1: string = "";
    let space2: string = "";



    for (let j = 0; j < lineCount-2 ; j++){                
        space =  space + " ";  
        space1 =  space + " ";
        space2 = space.substring(1);
    
        center = "%" + space1 + "%" + space2 + "%";
    }
    

    console.log(center);     
    } 
    
console.log(percent) 