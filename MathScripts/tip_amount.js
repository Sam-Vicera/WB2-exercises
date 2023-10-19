/* Formula to calculate tip amount on a food bill
    
Tip Amount = Food bill * Tax Percentage

*/

"use strict"

let foodBill = 112.50;
let taxPercentage = 0.15;

let tip = foodBill * taxPercentage;

console.log( "The tip on a " +foodBill + " food bill is " + tip.toFixed(2));