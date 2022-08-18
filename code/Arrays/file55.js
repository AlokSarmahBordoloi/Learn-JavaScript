// reduce method 

/*       The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value */

const numbers = [1,2,3,4,5,10];

// sum of all the numbers in array 

const sum = numbers.reduce((accumulator, currenValue)=> {
    return accumulator + currenValue;
}, 0);      // 0 is initial value 
console.log(sum);



// accumulator   ,   currentValue   ,      return
//    0 (initial value)    1                  1
//    1                    2                  3
//    3                    3                  6
//    6                    4                  10
//    10                   5                  15
//    15                   10                 25




const userCart = [
    {productId:1 , productName: "mobile", price: 12000},
    {productId:2 , productName: "laptop", price: 22000},
    {productId:3 , productName: "mobile", price: 15000}
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
},0)
console.log(totalAmount)


// total price      ,    current value   ,         return 
//   0                      {} //extract price of curentProduct  12000
// 12000                 22000                     34000        
//34000                 15000                      49000