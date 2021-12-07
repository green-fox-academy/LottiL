// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers6: number[] = [3, 4, 5, 6, 7];

console.log(numbers6.reverse());

let temporal: number = 0
for (let i = 0; i < numbers6.length / 2; i++) {
    temporal = numbers6[i];
    numbers6[i] = numbers6[numbers6.length - (1 + i)];
    numbers6[numbers6.length - (1 + i)] = temporal;
}

console.log(numbers6);
