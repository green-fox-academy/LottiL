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

for (let i = 0; i < lineCount; i++) {
    percent = percent + "%";
}
console.log(percent);

function spaces(spaceLength: number): string {
    let space: string = "";
    for (let i = 0; i < spaceLength; i++) {
        space = space + " ";
    }
    return space;
}

for (let i = 0; i < lineCount - 2; i++) {
    console.log("%" + spaces(i) + "%" + spaces(lineCount - 3 - i) + "%");
}
console.log(percent)