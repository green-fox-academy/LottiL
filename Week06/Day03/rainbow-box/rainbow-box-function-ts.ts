'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let rainbow: string[] = ["red", "yellow", "green", "blue", "purple"]

function drawCenterBox(square: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.strokeRect((canvas.width - square) / 2, (canvas.height - square) / 2, square, square);
}

for (let i = 0; i < canvas.height/2; i++) {
    let randomNumber: number = Math.floor(Math.random() * rainbow.length)
    drawCenterBox(20 * i+20, rainbow[randomNumber]);
}