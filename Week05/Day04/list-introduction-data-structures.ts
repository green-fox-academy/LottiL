/* We are going to play with lists. Feel free to use the built-in methods where possible.

Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add "William" to the list
Print out whether the list is empty or not
Add "John" to the list
Add "Amanda" to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements
Print out the number of elements in the list
The full output of your main method should be the following:

0
false
3
Amanda
William
John
Amanda
1. William
2. John
3. Amanda
Amanda
William
0 */

let names: string[] = [];

console.log(names.length);

names.push("William");

let IsEmpty: boolean = names.length === 0;

console.log("the list is Empty: " + IsEmpty);

names.push("John");

names.push("Amanda");

console.log(names.length);

console.log(names[2]);

for (let i = 0; i < names.length; i++) {
    console.log(i + 1 + ". " + names[i]);
}

names.splice(3, 1);

for (let i = names.length - 1; i > 0; i--) {
    console.log(names[i]);
}

names.splice(0, names.length);

console.log(names.length);