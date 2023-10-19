// switch statement used

let departmentCode =2;
let department;

switch(departmentCode){
    case 1:
        department = "Marketing"
        break;
    case 5:
        department = "Human resources"
        break;
    case 10:
        department = "Accounting"
        break;
    case 12:
        department = "Legal"
        break;
    case 18:
        department = "IT"
        break;
    case 20:
        department = "Customer Relations"
        break;
    default:
        department ="This department does not exist"
    
}
console.log(department);