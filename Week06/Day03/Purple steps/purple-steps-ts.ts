'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


let square: number = 20;
let numberOfSquare: number = 19;
function drawSquare(startX: number, startY: number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(startX, startY, square, square);
}
for (let i = 0; i < numberOfSquare; i++) {
    drawSquare(square * i, square * i);
}