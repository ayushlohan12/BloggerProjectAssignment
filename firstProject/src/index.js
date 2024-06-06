//prime no 
var x = 2
var Prime = true;

for (let i=2 ; i<x; i++){
    if (x % i ==0){
        Prime = false;
        console.log(i);
    }
}
if (Prime == false){
    console.log("this is not a prime no");
}
else{
    console.log("the is a prime no");
}