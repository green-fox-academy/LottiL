// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendA()` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendA(typo)

let typo: string = "Chinchill";

function appendA(append: string): string {
    return append + "a";
}

console.log(appendA(typo));

