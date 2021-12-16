'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let boxCoordinates: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let greenFoxCoordinates: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectTheDots(coordinates: number[][]) {
    ctx.beginPath();
    ctx.moveTo(coordinates[0][0], coordinates[0][1]);

    for (let i = 1; i < coordinates.length; i++) {
        ctx.strokeStyle = 'green';
        ctx.lineTo(coordinates[i][0], coordinates[i][1]);
        ctx.stroke();
    }
    ctx.closePath();
    ctx.stroke();
}

connectTheDots(greenFoxCoordinates)
connectTheDots(boxCoordinates)