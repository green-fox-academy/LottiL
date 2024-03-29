'use strict';
// Things are a little bit messed up here
// Your job is to decode the notSoCrypticMessage by using the hashmap as a lookup table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap: { [key: number]: string } = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

function read(listOfKey: number[]): string {
  let result: string = "";
  for (let i = 0; i < listOfKey.length; i++) {
    result = result + hashmap[listOfKey[i]];
  }
  return result;
}

out = (read(notSoCrypticMessage));

console.log(out);

/* szebb megoldás(órai)
notSoCrypticMessage.forEach(number=>{
  out= out.concat(hashmap[number])
}) */