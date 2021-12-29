'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let divideNumber: number = 64 //4,16,64;
let smallCanvasHeight: number = canvas.height / Math.sqrt(divideNumber);
let start: number = smallCanvasHeight * 0.15;
let lineNumber: number = 14;
let distance: number = smallCanvasHeight * 0.85 / lineNumber;

function linePlay(color: string, startX: number, startY: number, endX: number, endY: number) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function oneSquare(startXSquare: number, startYSquare: number,) {

    for (let i = 0; i < lineNumber; i++) {
        linePlay("green", 0 + startXSquare, start + i * distance + startYSquare, distance + i * distance + startXSquare, smallCanvasHeight + startYSquare);
        linePlay("purple", start + i * distance + startXSquare, 0 + startYSquare, smallCanvasHeight + startXSquare, distance + i * distance + startYSquare);
    }
}

for (let row = 0; row < Math.sqrt(divideNumber); row++) {

    for (let column = 0; column < Math.sqrt(divideNumber); column++) {
        oneSquare(column * smallCanvasHeight, row * smallCanvasHeight);
    }
}