'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

let sqSize: number = canvas.height / 8
let color: string

for (let j = 0; j < canvas.width / sqSize; j++) {
    function drawChess(color1: string, color2: string) {
        for (let i = 0; i < canvas.height / sqSize; i++) {
            if (i % 2 === 0) {
                color = color1
            } else color = color2
            ctx.fillStyle = color;
            ctx.fillRect(j * sqSize, i * sqSize, sqSize, sqSize);
        }
    }

    if (j % 2 === 0) { drawChess("white", "black") }
    else { drawChess("black", "white",) }
}
