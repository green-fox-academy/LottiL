'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let start: number = canvas.height * 0.15;
let lineNumber: number = 14;
let distance: number = canvas.height * 0.85 / lineNumber;

function linePlay(color: string, startX: number, startY: number, endX: number, endY: number) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

for (let i = 0; i < lineNumber; i++) {
    linePlay("green", 0, start + i * distance, distance + i * distance, canvas.height);
    linePlay("purple", start + i * distance, 0, canvas.height, distance + i * distance);
}