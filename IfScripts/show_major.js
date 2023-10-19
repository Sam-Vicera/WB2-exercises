let studentName = "Sam";
let studentMajor = "BIL";

switch(studentMajor){
    case "BIOL":
        console.log("Student: " + studentName)
        console.log("Major: Biology")
        console.log("Advising Location: Science Bldg, Room 310")
        break;
    
    case "CSCI":
        console.log("Student: " + studentName)
        console.log("Major: Computer Science")
        console.log("Advising Location: Shepard Hall, Room314")
        break;
    
    case "ENG":
        console.log("Student: " + studentName)
        console.log("Major: English")
        console.log("Advising Location: Keer Hall, Room 201")
        break;
    
    case "HIST":
        console.log("Student: " + studentName)
        console.log("Major: History")
        console.log("Advising Location: Keer Hall, Room 114")
        break;
    
    case "MKT":
        console.log("Student: " + studentName)
        console.log("Major: Marketing")
        console.log("Advising Location: Westly Hall, Room 310")
        break;
    default:
        console.log("Student: Sam")
        console.log("Major Code is Invalid")

}