'use strict';

let aa: number = 3;
aa = aa + 10

console.log(aa);

let bb: number = 100;
bb = bb - 7

console.log(bb);

let cc: number = 44;
cc *= 2

console.log(cc);

let dd: number = 125;
dd /= 5

console.log(dd);

let e: number = 8;
e = e ** 2

console.log(e);

let f1: number = 123;
let f2: number = 345;
console.log(f1 > f2)
// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
console.log(g2 * 2 > g1)
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
console.log(h % 11 === 0)
// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
console.log(i1 > i2 ** 2 && i1 < i2 ** 3)
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
console.log(j % 3 === 0 || j % 5 === 0)
// tell if j is divisible by 3 or 5 (as a boolean)