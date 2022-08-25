// more about prototype 

//JS t array u object hoi 
// protoytype --> functions 

// let numbers = [1,2,3];
let numbers = new Array(1,2,3);


// console.log(Object.getPrototypeOf(numbers));   // kot method bur define hbo htu sabo pari
console.log(Array.prototype);   //Array method keni prototype r vitr taka 
console.log(numbers);



function hello(){
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1')
console.log(hello.prototype);
