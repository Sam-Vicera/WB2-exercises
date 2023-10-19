// Leap year has to be divisible by 4
// Each century has to be divisible by 400

let year = 2500;


if (year % 100 == 0 && year % 400 != 0) {
   
   console.log( year + " is not a leapyear.")
}

else if (year % 4 == 0 ){
    console.log( year + " is a leapyear.")
}
else {
    console.log( year + " is not a leapyear.")
}
    
