// map method

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [2,34,87,3,8];

// const square = function(number){
//     return number * number;      //forEach not give new array but map gives new array so return is mandatory . 
    
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);


// const squareNumber = numbers.map(function(number){
//     return number * number;
// });
// console.log(squareNumber);


const squareNumber = numbers.map((number, index) => {
    return `index: ${index} , ${number * number}`;
});
console.log(squareNumber);



// another example
const users = [
    {fName: "Alok", age: 20},
    {fName: "Mohit", age: 40},
    {fName: "Ram", age: 23},
    {fName: "Harshit", age: 30},
]

const userName = users.map((user) => {
    return user.fName;
});
console.log(userName);