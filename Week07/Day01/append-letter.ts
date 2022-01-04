'use strict';
// Create a function called "appendA()" that adds "a" to every string in the "animals" list
// The parameter should be a list

let animals: string[] = ['koal', 'pand', 'zebr', 'anacond', 'bo', 'chinchill', 'cobr', 'gorill', 'hyen', 'hydr', 'iguan', 'impal', 'pum', 'tarantul', 'pirahn'];

// The output should be: "koala", "panda", "zebra" ...

 export function appendA(list:string[]):string[] {
    let newList: string[] = []
    for (let i = 0; i < list.length; i++) {
        newList.push(list[i].concat('a'))         
    }
    return newList
}

console.log(appendA(animals));