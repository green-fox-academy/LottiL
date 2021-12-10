'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected output: In a galaxy far far away

let replacedExample = example.replace("dishwasher", "galaxy");

example = replacedExample;

console.log(example);

export = example;