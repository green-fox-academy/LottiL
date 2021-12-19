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

How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product?
The full output of your main method should be the following:

400
Chicken
258.33334
4
no
Bread */

let priceList2: { [key: string]: number } = {
  "Eggs": 200,
  "Milk": 200,
  "Fish": 400,
  "Apples": 150,
  "Bread": 50,
  "Chicken": 550,
}

console.log(priceList2["Fish"]);

let maxPrice: number = 0;
let maxProduct: string = "";

for (const [product, price] of Object.entries(priceList2)) {
  if (price > maxPrice) {
    maxProduct = product;
    maxPrice = price;
  }
}
console.log(maxProduct);

let prices: number[] = Object.values(priceList2);
let sum: number = 0;
let below300: number = 0;

for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
  if (prices[i] < 300) {
    below300 += 1;
  }
}

console.log(sum / prices.length);
console.log(below300);

console.log(prices.includes(125) ? "yes" : "no");

let minPrice: number = Math.max(...prices)+1;
let minProduct: string = "";

for (const [product, price] of Object.entries(priceList2)) {
  if (price < minPrice) {
    minProduct = product;
    minPrice = price;
  }
}
console.log(minProduct);
