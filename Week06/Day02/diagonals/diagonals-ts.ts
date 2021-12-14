'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function diagonal(startX: number, startY: number) {
    let lineToX: number = 0;
    let lineToY: number = 0;
    let color: string;

    if (startX === 0 && startY === 0) {
        lineToX = canvas.width;
        lineToY = canvas.height;
        color = "green";

    } else if (startX !== 0) {
        lineToX = 0;
        lineToY = canvas.height;
        color = "red";
    } else if (startY !== 0) {
        lineToX = canvas.width;;
        lineToY = 0;
        color = "red";
    }
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
}
diagonal(0, 0)
diagonal(0, canvas.height)


/* function diagonal(color:string) {
    let moveToX: number = 0;
    let moveToY: number = 0;
    let lineToX: number = 0;
    let lineToY: number = 0;

    if ( color==="green") {
        moveToX = 0;
        moveToY = 0;
        lineToX = canvas.width;
        lineToY = canvas.height;

    } else if (color==="red") {
        moveToX = canvas.width;
        moveToY = 0;
        lineToX = 0;
        lineToY = canvas.height;
    }
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
}

diagonal("red")
diagonal("green") */