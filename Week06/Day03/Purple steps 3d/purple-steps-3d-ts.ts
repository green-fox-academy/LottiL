'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let squareSize: number = 10;
let numberOfSquare: number = 6;
let xy: number = squareSize


function drawSquare(startX: number, startY: number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(startX, startY, squareSize, squareSize);
}
for (let i = 0; i < numberOfSquare; i++) {
    drawSquare(xy, xy);
    xy = xy + squareSize;
    squareSize = squareSize * 1.5;
}
