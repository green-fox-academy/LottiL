'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

let size: number = 20;
let numberOfRectangles = 4;

for (let i = 0; i < numberOfRectangles; i++) {
    ctx.fillStyle = 'rgb(255,' + i * 80 + ', 0)';
    ctx.fillRect(i * size * 3, i * size * 3, size + 10 * i, size + 10 * i);
}
