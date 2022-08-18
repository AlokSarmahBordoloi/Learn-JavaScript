//Bracket Notation to find first Character in String
var firstLetterOfFirstName = "";
var FirstName ="Alok";

firstLetterOfFirstName =FirstName[2];
console.log(firstLetterOfFirstName);

//String Immutability
var myStr = "jello world";
myStr = "Hello world";

//Bracket Notation to find Nth Character in String
var fName = "Alok";
var SNameLetterOffNmae = fName[1]; //0 index ,so [1] is the 2nd position.

//Bracket Notation to find Last Character in String
var fName ="Alok";
var lastLetterOfFirstName = fName[fName.length - 1];

//Bracket Notation to find Nth-to-Last Character in String
var fName2 = "ada";
var thirdToLastLetterOfFirstName = fName2[fName2.length-3];
console.log(thirdToLastLetterOfFirstName);

var lName2 = "Sharma";
var secondToLastLetterOfLastName = lName2[lName2.length - 2];
console.log(secondToLastLetterOfLastName);



//Word Blanks
    //Using string to build a Mad Libs dtyle word game.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    
    var result = "";
    result += "The " + myAdjective + " " +  myNoun + " " + myVerb + " to the store " + myAdverb;
    return result; 
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));




//Array
//Store Multiple values with Arrays
var ourArray =["Alok", 23];
var myArray = ["John", 43];

/*Nested Array:  when one elements in an array is another array, that's called a nested array or a multidimensional array.
    example: */
    var ourArray1 = [["the universe",34], ["everything", 10932]];
    var myArray2 = [["bulls",43], ["white sox", 6]];

//Access Array Data with Indexes
var ourArray2 = [45,56,75,35];
var ourData = ourArray2[2];
console.log(ourData);

//Modify Array Data with Indexes    ...example:
var ourArray5 = [29,34,87];
ourArray5[1] = 20; // new array is [29,20,87]

//Access Multi-Dimensional Arrays with Indexes     ...example:
var myA = [[21,32,5], [3,1,78], [[10,4,2], 34,98]];
var myD = myA[2][1];  // 1st bracket points to 1st element in the array and then that element is an array.So the 2nd bracket points to be index of the array within the array.
console.log(myD);

//Manipulate array with push()         ...example:
var ourArray76 = ["Stimpson", "j", "cat"];
ourArray76.push(["happy","joy"]);
console.log(ourArray76); // output is : ["Stimpson", "j", "cat", ["happy","joy"]]

//Manipulate Arrays with pop()        ...example:
var ourA11 = [1,3,67];
var removedFromourArray = ourA11.pop(); //pop is use to remove the last element .  output: [1,3]

var myA34 = [["john",4556] , ["cat", 54]];
var removedFromMyArray2 = myA34.pop();
console.log(myA34);

//Manipulate Arrays with Shift()       ...similar to pop()
var ourA12 = ["Alok", "Ad", ["Cat"]];
var removedFromourArray1 = ourA12.shift();
console.log(ourA12);  //output :[ 'Ad', [ 'Cat' ] ]


//Manipulate Array with unshift()      ...similar to push()
var ourA13 = ["alok", "jj", "cat"];
ourA13.shift(); //ourA13 now equals ["jj","cat"]
ourA13.unshift("Happy"); //ourA3 now equals ["Happy","jj","cat"]

/*      1. The push() method adds new items to the end of an array.
        2. The pop() method removes the last element from an array .
        3. The shift() method removes the first element from an array and returns that removed element. 
        4. The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array */



//Write Resusable code with Functions
function ourReusableFunction(){
    console.log("heyya,World");
}

ourReusableFunction();

//Passing values to functions with Arguments
function ourFunctionWithArgs(a,b) {
    console.log(a-b);
}
ourFunctionWithArgs(10,5); //output: 5    //this line just going to call the function 

        /*  Parentheses are a pair of punctuation marks that are used to enclose arguments to functions and methods. 
             Parameter or a formal argument is a special kind of variable used in a subroutine to refer to one of the pieces of data provided as input to the subroutine.
            Arguments are independent items, or variables, that contain data or codes. */


//Global Scope and Functions
    //scope refers to the visibility of variables




//Local scope and function
function myLocalScope() {
    var myVar = 6;
    console.log(myVar);
}
myLocalScope();

//Return a value from a function
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));
