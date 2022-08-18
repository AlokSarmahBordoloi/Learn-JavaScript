// block scope vs function scope


// let and const are block scope 
// var is function scope



//example of let and const in block scope 
// {
//     let firstName = "Alok";
//     console.log(firstName);
// }
// console.log(firstName);   //error ..because let and const can't access outer the block scope .So, output:reference error 



// if(true){
//     var firstName = "Harshit";
//     console.log(firstName);
// }
// console.log(firstName);


function myApp(){
    if (true) {
        let firstName = "harshit";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();




