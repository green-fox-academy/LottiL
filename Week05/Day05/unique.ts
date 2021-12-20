//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

let listOfNumbers: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(arr: number[]) {
    arr.sort((a, b) => a - b);
    let uniqueList: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            uniqueList.push(arr[i]);
        }
    }
    console.log(uniqueList);
}

unique(listOfNumbers)

//  Example
//console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

