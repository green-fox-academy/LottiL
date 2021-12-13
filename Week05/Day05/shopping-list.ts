/* Shopping list
We are going to represent a shopping list by a list containing strings.

Create a list with the following items:
eggs, milk, fish, apples, bread and chicken
Create an application which prints out the answers to the following questions:
Do we have milk in the shopping list? (yes/no)
Do we have bananas in the shopping list? (yes/no)
The full output of your main method should be the following:

yes
no */

let shoppingList: string[] = ["eggs", "milk", "fish", "apples", "bread", "chicken"];
let isMilk: Boolean = false;
let isBananas: Boolean = false;

for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i] === "milk") {
        isMilk = true;
    }
    else if (shoppingList[i] === "bananas") {
        isBananas = true;
    }
    /* if (isMilk && isBananas) {
        break;
    } */
}

if (isMilk) {
    console.log("yes");
}
else console.log("no");

if (isBananas) {
    console.log("yes");
}
else console.log("no");