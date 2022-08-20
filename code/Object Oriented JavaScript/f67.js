// Method 
// function inside object    called method 


// example1:
const person ={
    fName : "Alok",
    age : 20,
    about: function(){
        // console.log(`person name is ${this.fName} and person age is ${this.age}`);
        console.log(this);
    }
} 

person.about();




//  example2:

function personInfo(){
    console.log(`person name is ${this.fName} and person age is ${this.age}`);
}

const person1 ={
    fName : "Alok",
    age : 20,
    about: personInfo
} 
const person2 ={
    fName : "Mohit",
    age : 23,
    about: personInfo
} 
const person3 ={
    fName : "Harsh",
    age : 45,
    about: personInfo
} 

person1.about();
person2.about();
person3.about();
