// use prototype



// const userMethods = {
//     about : function () {
//         return `${this.fName} is ${this.age} years old`;
//     },
//     is18 :  function () {
//         return this.age >= 18;
//     },
//     sing: function(){
//         return ' sing aaabbbccc..';
//     }
// }

// createUser function t free space dea asa mana prototype asa so nija  userMethods object  bonuat ka key value pair bur prototype t add kori dim

function createUser(fName, lName, email, age, address) {
    const user = Object.create(createUser.prototype);   // set proto property
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.fName} is ${this.age} years old`;
};
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.sing = function(){
    return ' sing aaabbbccc..';
}

const user1 = createUser('alok','sarma','alok@gmail.com', 20,"my address");
const user2 = createUser('aaalok','dsarma','adlok@gmail.com',40,"my is address");
const user3 = createUser('ram','dsarma','adlok@gmail.com',40,"my is address");
console.log(user1);         
console.log(user1.about()); 
console.log(user1.is18());
console.log(user2.sing());


// proto = refernce hoi ,  junto ami chain create korim htur reference hoi
// prototype = simple object hoi
