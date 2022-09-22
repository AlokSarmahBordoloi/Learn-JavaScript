console.log("Hello World");

/* Data Types:
undefined , null , boolean , string , symbol , number and object 
*/



var myName = "Alok"
myName = 9
// var is going to able to used thoughout the whole program

let ourName = "HelloWorld" 
//let is only be used within the scope of where you declared that.
     
const pi = 3.14   
//const is a variable that should never change.



//Storing values with assignment operator :

var a;  //here ,declaring a variable to be called a.

var b = 3;//here  , declaring and assigning a varible .so here declaring "var b" and then the equals sign is the assignment operator.Its means 3 is assigned to b.
console.log(a);  //output: undefine
a = 8; //don't declare "a" because it was already declared .

b = a;

console.log(a); //output: 8



//Initializing Variables with the Assignment Operator :
var a = 9;
var x = "I am a"

 /*Case Sensitivity in Variables :
  Variable names & function names in JS are case sensitive. 
      1st letter is always going lowecase.Any time a new word or a new section of a word,its capitalize the first letter. */
  var titaleCaseOver;
  var properCamelCase;
 
  
//Basic Math :
  //Adding numbers 
  var sum = 10+11;
  console.log(sum);
   //Subtracting Numbers
  var diff = 45-33;
  console.log(diff);
  //Multiplaction 
  var p = 8*4;
  //Dividing
  var d = 66/33;
  //Incrementing Numbers
  var myVar = 87;
  myVar++; //myVar increment 87 to 88
  //Decrementing Numbers
   var myVar = 87;
   myVar--; //decrement 87 to 86
   //Desimal Number or floting point number
   var a = 98.76;
   //Finding Remainder
   var r;
   r = 11 % 3; // r is 2
   //Compund Assignment with Augmented Math Operations
   var a = 5;
   a+=6;
   a-=2;
   a*=4; //shortcut for Js ... a = a*4;
   a/=3;



//Declare String Variables
var firstN = "Alok";
var lastN = "Sharma";

//Escaping Literal Quotes in Strings 
var myStrA = "I am a \"double quoted\"string  inside \"double quotes\""; 
console.log(myStrA);  //not going to show quotation marks

//Quotes in Strings with Single Quotes
var mystrB = '<a href="http://www.example.com" target="_blank">Link</a>'; //not show single quotes
var mystrB = `'<a href="http://www.example.com" target="_blank">Link</a>'`; //Show single and double quotes

//Escape sequences in Strings
      /*
      \'    single quotes
      \"    double quotes
      \\    backslash
      \n    newlinw
      \r    carriage return
      \t    tab
      \b    backspace
      \f    form feed 
      */

//Concatenating Strings with Plus Operator
var ourStr = "I come first" + "I come second";
console.log(ourStr);
//Concatenating Strings with Plus Equals Operator
var ourStr1 = "I come first";
ourStr1 += "i come second";
//Concatenating Strings with Variables
var Name = "freeCodeCamp";
var ourStr = "Hello,our name is " + ourName + ",how are you?";
console.log(ourStr);
//Appending Variables to Strings
var anAd = "awesome!";
var ourStr = "freecodecamp is ";
ourStr += anAd;
//Find Length of String
var fNameLength =0;
var firstName = "Alok";
fNameLength = firstName.length;
console.log(fNameLength); //output:4

var e = "AlokSarmahBordoloi";
console.log(e.length);//output:18
