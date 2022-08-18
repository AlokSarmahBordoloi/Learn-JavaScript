// every method 

/*  The every() method executes a function for each array element.
    The every() method returns true if the function returns true for all elements. The every() method returns false if the function returns false for one element. */

const numbers = [2,4,6,8,10];
//array tut toka every elements a even hoi naki hatu check koribola ceven method use korim .

// function isEven(number){
//     return number % 2 === 0;
// }
// const ans1 = numbers.every(isEven);
// console.log(ans1);


const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);
 // callback function ---> true/false (boolean)
 
// every method  ---> true/false (boolean)


//example:   
    // check every product is < 30k
const userCart =[
    {pId:1, pName:"Tv", price: 15000},
    {pId:2, pName:"laptop", price: 55000},
    {pId:3, pName:"mobile", price: 25000},
]

const ans2 = userCart.every((cartItem)=> cartItem.price<30000);
console.log(ans2);


