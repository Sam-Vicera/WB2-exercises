/* Formula to calculate distance between two points
    
Distance between two points = Root((x2-x1)^2 +(y2-y1)^2)

*/

let x2 =7;
let x1 =2;
let finalX = Math.abs(x2 - x1);

let y2 = 14;
let y1 =5;
let finalY = Math.abs(y2-y1);


let distanceBetweenpoints = Math.sqrt(Math.pow(finalX,2) + Math.pow(finalY,2));

console.log(distanceBetweenpoints.toFixed(2));

