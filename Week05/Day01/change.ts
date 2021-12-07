// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers3: number[] = [1, 2, 3, 8, 5, 6];

numbers3 = numbers3.map(function (num, index) {
    if (index === 3) {
        return num / 2;
    }
    return num;
})
console.log(numbers3);

/* nem az én megoldásom, csak ide mentettem
numbers = numbers.map(function(num, index) {
    if (index == 3) {
       return 4;
    }
    return num;
  })


  console.log(numbers[3]); */