//OOP's

// create functions to create multiple objects


// const user = {
//     fName: "Alok",
//     lName: "Sarmah",
//     email: "alok@gmail.com",
//     age: 20,
//     address:"House Number, colony, pincode, state",
//     about: function(){
//         return `${this.fName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }



// function:  1) that function create object
//            2) add key value pair
//            3) object ko return krega

function createUser(fName,lName,email,age,address){
    const user = { };
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.fName} is ${this.age} years old`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('alok','sarma','alok@gmail.com', 20,"my address");
console.log(user1);
const is18= user1.is18()
console.log(is18);
const about = user1.about();
console.log(about);
