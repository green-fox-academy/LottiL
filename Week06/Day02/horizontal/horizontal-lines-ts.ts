'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function drawHorizontal(startX: number, startY: number) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 50, startY);
    ctx.stroke();
}

for (let i = 0; i < 30; i++) {
    drawHorizontal(10 * i, 10 * i);
}
