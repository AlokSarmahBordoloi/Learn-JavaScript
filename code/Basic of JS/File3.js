//Use Conditional logic with If Statements
function ourTrueOrFalse(isItTrue) {
    if(isItTrue){
        return "Yes,its true";
    }
    return "No, its false";
}

console.log(ourTrueOrFalse(true));


//Comparison with the equality operator 
        /* 1. The “=” is an assignment operator is used to assign the value on the right to the variable on the left. 
           2. The '==' operator checks whether the two given operands are equal or not. '==' attempts to convert boyh values being compared to a common type
           3. The '===' operator compares the values as well as the data types of the operands .The Strict operator does not do the type conversion.       */


//Comparing with the Inequality operator !=
function testNotEqual(val) {
    if (val != 99) {
        return "Not equal";
    }
    return "equal"; 
}
console.log(testNotEqual(10)); //output : not equal 

//Comparing with the strick Inequality operator !==  ... It check value is true or false but it's not going to convert types.



/*  JavaScript Comparison Operators :
 ==	    Equal to: true if the operands are equal
!=	    Not equal to: true if the operands are not equal
===	    Strict equal to: true if the operands are equal and of the same type
!==	    Strict not equal to: true if the operands are equal but of different type or not equal at all
>	    Greater than: true if the left operand is greater than the right operand
>=	    Greater than or equal to: true if the left operand is greater than or equal to the right operand
<	    Less than: true if the left operand is less than the right operand
<=	    Less than or equal to: true if the left operand is less than or equal to the right operand.
    JavaScript Logical Operators :
    &&	    Logical AND: true if both the operands/boolean values are true, else evaluates to false.
    ||	    Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false.
    !	    Logical NOT: true if the operand is false and vice-versa.       */



/* if statement,Else Statment,else if statment,switch statment
    1. Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
    2. Use else to specify a block of code to be executed, if the same condition is false.
    3. Use else if to specify a new condition to test, if 3.the first condition is false.
    4. Use switch to specify many alternative blocks of code to be executed.
if Statement Syntax :
    if (condition) {
         //  block of code to be executed if the condition is true
    }
else Statement syntax:
    if (condition) {
         //  block of code to be executed if the condition is true
    } else {
         //  block of code to be executed if the condition is false
    }
else if syntax:
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
switch statement syntax:
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}                           */
