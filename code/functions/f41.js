// Functions in JS

/*    A Function is a block of code that is designed to perform a task and executed when it is been called or invoked .  
            There are 3 ways of writing a function in JavaScript:   
      1.Function Declaration
      2.Function Expression
      3.Arrow Function        */


//function declaration
function bday(){
    console.log("happy birday to you....");
}

bday();     // call/invoke/run  the function
// bday();
// bday();

//function expression
const alokHappyBday = function(){
    console.log("hey happy bday.....");
}
alokHappyBday();


// function twoPlusFour(){
//     console.log(2+4);
// }

// twoPlusFour();




//function declaration 
function sumTwoNumber(num1 , num2){    //parameter num1 and num2
    return num1+num2;
}
const returnValue = sumTwoNumber(4,5);   //argument 4 and 5
console.log(returnValue);

//function expresion 
const sumTwoNumbers = function( number3, number4){
    return number3 + number4;
}
const ans7 = sumTwoNumbers(2,3);
console.log(ans7);



//function declaration 
function sumThreeNumber(num1,num2,num3){
    return num1 + num2 + num3;
}
const returnValue2 = sumThreeNumber(6,9,1);
console.log(returnValue2);

//function expresion 
const sumThreeNumbers = function(number1, number2, number3){
    return number1+number2+number3;
}
const ans2 = sumThreeNumbers(2,3,5)
console.log(ans2);


// console.log(undefined + undefined);     //output: NaN
// console.log(2+3+undefined);      //output: NaN




// Find odd or even
    //function expresion

// function isEven(number){
//     if (number % 2 == 0) {
//         return true;
//     }
//         return false;
// }

        //another method

     // function isEven(number){
    //     return number % 2 === 0;
    // }

    // console.log(isEven(6));
    // const vr = isEven(6);
    // console.log(vr);

//function expresion
const isEven = function(number){
    return number % 2 ===0;
}
console.log(isEven(2));


//another example    input: string   output: firstCharacter

//function declaration :
function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("abc"));

//function expresion :
const firstChar2 = function(anyString1){
    return anyString1[0];
}
console.log(firstChar2("zmn"));



//Another example     input: array, target (number)     output: index of target if target present in array

function findTarget(array,target){
    for(let i = 0 ; i<array.length ; i++ ){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,5,7,2,9];
const ans = findTarget(myArray, 7);
console.log(ans);
