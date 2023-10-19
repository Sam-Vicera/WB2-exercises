
let payrate = 20;
let overtimerate = payrate * 1.5;
let hoursWorked = 60;
let grossPay;
let overtimeHours = hoursWorked - 40
let maxedNonovertimeHours = 40;

if (hoursWorked <= 40) {
grossPay = payrate * hoursWorked
}
else if (hoursWorked => 40) {
    grossPay = (maxedNonovertimeHours * payrate) + (overtimeHours * overtimerate); 
};

console.log(grossPay);