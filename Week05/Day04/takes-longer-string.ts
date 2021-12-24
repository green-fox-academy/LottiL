'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

/* //console.log(quote.indexOf("I")); (ha ez 18, akkor nem elég 20-ig kivágni? úgy hogy szóköz is legyen benne?)

quote = quote.slice(0, 21) + "always takes longer than" + quote.slice(20);

console.log(quote); */

let placeToInsert:string = "It you"
let insertIndex: number = quote.indexOf(placeToInsert);
let insertIndexPlus: number = placeToInsert.indexOf(" ")
quote = quote.slice(0, (insertIndex+insertIndexPlus+1)) + "always takes longer than" + quote.slice(insertIndex+insertIndexPlus);

console.log(quote);

