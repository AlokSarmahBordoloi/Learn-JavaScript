// Primitive vs reference data type

//Primitive types
let num1 = 4;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log("after incrementing the num1 ")
console.log(num1);
console.log(num2);


//reference types
//array
let array1 = ["a","b"]
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("c");
console.log("after pushing element to array1");
console.log("array1",array1);
console.log("array2",array2);
