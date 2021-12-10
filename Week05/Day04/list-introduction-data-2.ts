/* List introduction 2
Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains "Durian" or not
Remove "Durian" from List B
Add "Kiwifruit" to List A after the 4th element
Compare the size of List A and List B
Get the index of "Avocado" from List A
Get the index of "Durian" from List B
Add "Passion Fruit" and "Pomelo" to List B in a single statement
Print out the 3rd element from List A
Print all elements of List A
Print all elements of List B
The full output of your main method should be the following:

true
false
1
-1
Blueberries
[Apple, Avocado, Blueberries, Durian, Kiwifruit, Lychee]
[Apple, Avocado, Blueberries, Lychee, Passion Fruit, Pomelo] */

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB: string[] = [...listA];

//listA.includes("Durian")

for (let i = 0; i < listA.length; i++) {
    if (listA[i] === "Durian") {
        console.log(true);
        break
    }
}

listB.splice(3, 1);

listA.splice(4, 0, "Kiwifruit");

console.log(listA.length === listB.length);

console.log(listA.indexOf("Avocado"));

console.log(listB.indexOf("Durian"));

listB.splice(listB.length, 0, "Passion Fruit", "Pomelo");

console.log(listA[2]);

console.log(...listA);

console.log(...listB);