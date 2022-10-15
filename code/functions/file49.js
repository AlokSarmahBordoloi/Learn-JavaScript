// parameter destructuring

/*  Destructuring in JavaScript is used to unpack or segregate values from arrays or properties from object literals
    into distinct variables, thus it allows us to access only the values required.
*/


const person = {
    firstName: "Alok",
    gender: "male",
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}


printDetails(person);
