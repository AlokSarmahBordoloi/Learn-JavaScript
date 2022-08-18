//Array destructuring 
const myArray = ["value1", "value2","value3","value4"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// let [myvar1, , myvar2] = myArray;
// let newArray = myArray.slice(2);
let [myvar1,myvar2, ...newArray] = myArray;

console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2); 
console.log(newArray);
