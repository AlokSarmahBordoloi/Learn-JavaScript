// some method 

/*      The some() method checks if any array elements pass a test (provided as a callback function).
        The some() method executes the callback function once for each array element. The some() method returns true (and stops) if the function returns true for one of the array elements.   
        The some() method does not change the original array*/


const numbers = [2,3,5,8];

//keya ek bhi number esa hai jo even number hai

const ans = numbers.some((number) => number % 2 == 0);    //kisi eak bhi elements(numbers array par) mey liha hua condition satisfied hua to output mey true melaga 
console.log(ans);


//example:
    //check any product price is < 1lakhs
const userCart =[
    {pId:1, pName:"Tv", price: 15000},
    {pId:2, pName:"laptop", price: 55000},
    {pId:3, pName:"mobile", price: 30000},
    {pId:4, pName:"macbook", price: 250000}
]

const ans4 = userCart.some((cartItem)=> cartItem.price > 100000 );
console.log(ans4);
