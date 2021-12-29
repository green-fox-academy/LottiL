'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let row: number = 21;
let side: number = canvas.width / row;
let height: number = Math.sqrt(3) / 2 * side;
let startXi: number = canvas.width / 2;
let startYi: number = 0;
let startXj: number = canvas.width / 2;
let startYj: number = 0;

function connectTheDots(coordinates: number[][]) {
    ctx.beginPath();
    ctx.moveTo(coordinates[0][0], coordinates[0][1]);

    for (let i = 1; i < coordinates.length; i++) {
        ctx.lineTo(coordinates[i][0], coordinates[i][1]);
        ctx.stroke();
    }
    ctx.closePath();
    ctx.stroke();
}

for (let j = 0; j < row; j++) {
    startXj = startXj + side / 2
    startYj = startYj + height

    for (let i = 0; i < row - j; i++) {
        let oneTriangle: number[][] = [[startXi, startYi], [startXi + side / 2, startYi + height], [startXi - side / 2, startYi + height]]
        connectTheDots(oneTriangle)
        startXi = startXi - side / 2
        startYi = startYi + height
    }

    startXi = startXj;
    startYi = startYj;
        
}