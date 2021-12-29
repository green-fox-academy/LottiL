'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let start: number = canvas.height / 2;
let lineNumber: number = 14;
let distance: number = canvas.height / 2 / lineNumber;

function linePlay(startX: number, startY: number, endX: number, endY: number) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}



for (let i = 1; i < lineNumber; i++) {
    linePlay(start , 0 + i * distance, start + i * distance, start);
    linePlay(start , 0 + i * distance, start - i * distance, start);
    linePlay(start , start + i * distance, canvas.height - i * distance, start);
    linePlay(start , start + i * distance, 0 + i * distance, start);
}

linePlay(start,0, start, canvas.height);