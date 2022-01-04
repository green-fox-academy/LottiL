'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called repairSweets() which takes the list as a parameter
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

export function repairSweets(shoppingList:any[]) :string[]{
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] == 2) {
            shoppingList[i] = "Croissant";
        }else if (shoppingList[i] == false) {
            shoppingList[i] = "Ice cream";
        }         
    } 
    return shoppingList   
}

console.log(repairSweets(shopItems));
