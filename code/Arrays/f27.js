//clone array 

//how to concatenate two arrays

let array1 = ["item1" , "item2"]

//two method in atrray clone

// let array2 = array1.slice(0);  //.slice method 
// let array2 = array1.slice(0).concat(["item 76","hello"]);    //add extra elements

// let array2 = [].concat(array1);    //.concate method
// let array2 = [].concat(array1,["item 76","hello"]);     //add extra elements


//new way
//  spread operator

// let array2 = [...array1];
// let array2 = [...array1,"item 76","hello"];     //add extra elements


let oneMoreArray = ["hi","78","8976","strings"];
let array2 = [...array1,...oneMoreArray];


array1.push("item23");


console.log(array1 === array2);
console.log("array 1",array1);
console.log("array 2",array2)
