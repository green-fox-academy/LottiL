/* We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

Create a map with the following key-value pairs:

Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which prints out the answers to the following questions:

Which products cost less than 201? (just the name)
Which products cost more than 150? (name + price)
The full output of your main method should be the following:

Apples
Eggs
Milk
Bread
Fish 400
Chicken 550
Eggs 200
Milk 200
NOTE: Your output lines may be in a different order as the HashMap API does not define the order of iteration. */

let priceList3: { [key: string]: number } = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550,
}

let lessThan: number = 201
let moreThan: number = 150

for (const [product, price] of Object.entries(priceList3)) {
    if (price < lessThan) {
        console.log(product);
    }
}

for (const [product, price] of Object.entries(priceList3)) {
    if (price > moreThan) {
        console.log(product, price);
    }
}