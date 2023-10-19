/* Formula to calculate how many tiles will be needed to fill a space
    -word problem requirements : can't buy a partial box, want to buy 10 percent more than needed 
     how many boxes should you buy if there are 12 1x1 foot tiles in each box?    

     Room dimensions: Length = 36 feet
                      Width = 45 feet

    Area = Length * width
*/

let length = 36;
let width = 45;

let area = length * width;

console.log(area);

let tilesMin = Math.round((area / 12));

console.log(tilesMin);

let tilesMax = tilesMin * 1.10;

console.log(Math.ceil(tilesMax)); //this isn't working the way I intended.

let boxesNeeded = Math.ceil(tilesMax / 12);

console.log(boxesNeeded);

console.log("The total area is " + area + " which results in a miniumum of " + tilesMin + " tiles needed. With a ten percent extra there will be a total of " + tilesMax + " tiles resulting in a total of " + boxesNeeded + " boxes needed." )
