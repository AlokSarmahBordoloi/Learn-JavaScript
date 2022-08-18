//  Arrow function :

//function declaration
// function bday(){
//     console.log("happy bdayy.....")
// }
// bday();

//functionexpresion 
// const alokHappyBday = function(){
//     console.log("hey happy bday.....");
// }

//arrow function 
//example
const alokHappyBday = () => {
    console.log("hey happy bday.....");
}
alokHappyBday();

//example
const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4)
console.log(ans);


//example
// const firstChar2 = anyString1 => {
//     return anyString1[0];
// }
//short method 
const firstChar2 = anyString1 => anyString1[0];
console.log(firstChar2("zmn"));


//example
const isEven = number =>  number % 2 === 0;         //one line t return korila ana ka 1line ta koribo pari 
console.log(isEven(3));


/*function tut jodi 1 ta parameter taka tatia parentheses () use nokorilu soli jai
   but 1ta ka basi or 0 uparameter taka tatia () use koribo lagibo .     */
