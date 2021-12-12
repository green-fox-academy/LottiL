/* Personal finance
We are going to represent our expenses in a list containing integers.

Create a list with the following items:
500, 1000, 1250, 175, 800 and 120
Create an application which prints out the answers to the following questions:
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? (print this as a float value)
The full output of your main method should be the following:

3845
1250
120
640.8333 */

let spending: number[] = [500, 1000, 1250, 175, 800, 120];

let addSpending: number = 0;

spending.forEach(element => {
    addSpending = element + addSpending;
});

console.log(addSpending);

spending.sort((a, b) => a - b);

console.log(spending[spending.length - 1]);

console.log(spending[0]);

console.log(addSpending / spending.length);
