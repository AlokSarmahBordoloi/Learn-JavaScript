// arrow function
// This inside arrow functions

// arrow function r this nataka .. nijor this natka  junto this loi surrounding r pa loi .    
// arrow function r this to change koribo nuri . 


const user1 = {
    fName: "Alok",
    age: 20,
    about: () => {
        // console.log(this);  // arrow func t this to nijor surrounding r pora 1level upr r pora lobo
        console.log(this.fName,this.age);    // this to user1 nohoi ... ear this tu  window hbo 
    }
} 

user1.about(user1);
