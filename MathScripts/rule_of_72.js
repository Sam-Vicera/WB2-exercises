/* Formula to calculate rule of 72
    
Years to Double = 72 / Annual Rate of Return

*/
"use strict"

let balance = 1000000;
let rateOfreturnPercentage = 0.06;
let returnRateformulaNumber = rateOfreturnPercentage * 100;

let timeTodouble = balance / returnRateformulaNumber;

let newBalance = balance * 2;
console.log(timeTodouble)

console.log("At a " + rateOfreturnPercentage + " interest rate, your savings account will be worth " +newBalance.toFixed(2) + " in " + timeTodouble.toFixed(1) + " years ")
