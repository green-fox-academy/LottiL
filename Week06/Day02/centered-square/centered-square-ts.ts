'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

let square: number = 10;
ctx.strokeStyle = 'green';
ctx.strokeRect((canvas.width-square)/2, (canvas.height-square)/2, square, square);