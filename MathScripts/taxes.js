/* Formula to calculate taxes withheld
    
Taxes withheld = salary * 23 percent

*/

let salary = 1203124;

let federalTaxespercentage = 0.23;

let taxesWithheld = salary * federalTaxespercentage;

console.log(taxesWithheld.toFixed(2));