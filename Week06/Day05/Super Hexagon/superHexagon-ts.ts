'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };


let sideLength = 4;
let side: number = 20;
let height: number = Math.sqrt(3) / 2 * side;
let startXj: number = canvas.width / 2 + side / 2;
let startYj: number = 10;


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

function drawLine(lineLength:number, startX:number,startY:number ) {
    for (let i = 0; i < lineLength; i++) {
        let oneHexagon: number[][] = [[startX, startY], [startX + side / 2, startY + height], [startX, startY + 2 * height],
        [startX - side, startY + 2 * height], [startX + side / 2 - 2 * side, startY + height], [startX - side, startY],]
        connectTheDots(oneHexagon)
        startX = startX + side / 2 - 2 * side;
        startY = startY + height;
    } 
}

for (let j = 0; j < sideLength*2-1; j++) {
    if (j < sideLength-1) { 
        drawLine(sideLength+j,startXj,startYj);
        startXj = startXj + side / 2 + side;
        startYj = startYj + height;
    } else {   
        drawLine(3*sideLength-j-2,startXj,startYj); //sl+j-2*(j-sl+1)-hacsak nem sokkal gyorsabb a másik, akkor ezt kéne beírnom, hogy ne legyen komment
        startYj = startYj + 2*height;
    } 
}