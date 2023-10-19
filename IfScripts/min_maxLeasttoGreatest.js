// three variables a , b , c
// no math min or max to be used only if else

/* 
Logic if a is the smallest number console.log it, if b is smaller than C console.log b 
and then c, if not console log c first than b

Repeat the process for all three letters
*/

let a = 7;
let b = 7;
let c = 7;

if (a < b && a < c || a == b && a == c){
    console.log(a);
    if (b<c || b == c){
    console.log(b)
    console.log(c)}
    else {
        console.log(c)
        console.log(b)
       
    }
}
   

else if (b < a && b < c ){
    console.log(b)
    if (a < c || a == c)
    console.log(a)
    console.log(c)
}
else if (c < a){
    console.log(c)
    console.log(a)
}
else if (c < a && c < b )
    console.log(c)
    if (b < a || b == a){
        console.log(b)
        console.log(a)
    }
else if (a < b){
        console.log(a)
        console.log(b)
}
