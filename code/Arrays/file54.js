//  filter method 

// The filter() method creates a new array filled with elements that pass a test provided by a function

const numbers = [1,2,3,4,5];

//filter event Number
const isEven = function(number){
    return number % 2 === 0;
}
const eventNumber = numbers.filter(isEven);     //filter r callback function always return boolean values (true/false)
console.log(eventNumber);


//filter odd number
const isOdd = function(number){
    return number % 2 !== 0;
}
const oddNumber = numbers.filter(isOdd);
console.log(oddNumber);


//using arrow function 
// const oddNumber = numbers.filter((numbetr)=> {
//     return number % 2 !==0;
// })
// console.log(oddNumber);