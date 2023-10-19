/* Formula to calculate vans needed and price of trip
    
Information to keep in mind: Charter vans seat 15 people
                             Vans cost 250 dollars a day
                             38 people will be going on this trip
                             How much is each person paying for this trip?
                             Why do you have leftover money and where are we spending it?                             

*/

let tripDays = 3;
let vanPricing = 250;
let vanCosts = vanPricing * tripDays;

let passengers = 38;
let splitCost = vanCosts / passengers;

console.log(Math.round(splitCost));

let totalMoney = Math.round(splitCost) * passengers;

console.log(totalMoney);

// total money is $760 due to rounding up. The vans cost was $750, this leaves us with an extra 10 we will not be telling the group about