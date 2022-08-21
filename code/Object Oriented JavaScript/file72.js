// short syntax

//long 

// const user1 = {
//     fName: "Alok",
//     age: 20,
//     about: function(){
//         console.log(this.fName,this.age);
//     }
// }


//short

const user1 = {
    fName: "Alok",
    age: 20,
    about(){
        console.log(this.fName,this.age);
    }
}

user1.about();
