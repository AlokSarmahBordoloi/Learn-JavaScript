// important array methods


//foreach method 
    /*he forEach() method calls a function and iterates over the elements of an array. */

const numbers = [2,4,6,9];

function multiplyBy2(number, index){
    console.log(`index is ${index} number is ${number} `);
    // console.log(`${number}*2 = ${number*2}`);
}

// for (let i = 0; i< numbers.length; i++) {
//     multiplyBy2(numbers[i], i);
// }


numbers.forEach(multiplyBy2);               //for loop use kori jetu kam koru samekam forEach loop use kori koribo pari .. manaa atu callback r nisena kam kora.



const number2 = [45,567,8,2];

number2.forEach(function(number, index){        //anonymous function 
    console.log(`index is ${index} number is ${number} `);
});



const number3 = [3,1,7,10];

number3.forEach(function(number){
    // console.log(`${number}*2 = ${number*2}`)  
    console.log(number*2);
});



const users = [
    {firstName: "Alok", age: 20, gender: 'male'},
    {firstName: "nitish", age: 28, gender: 'male'},
    {firstName: "rohit", age: 24, gender: 'male'},
    {firstName: "mohit", age: 22, gender: 'male'},
    {firstName: "harry", age: 21, gender: 'male'}
]

// users.forEach(function(users){
//     console.log(users.firstName);
// });

users.forEach((users,index) => {
    console.log(users.firstName,index);
})

// for(let user of users){
//     console.log(user.firstName);
// }
