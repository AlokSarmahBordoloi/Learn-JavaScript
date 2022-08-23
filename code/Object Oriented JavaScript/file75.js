// solution using object.create


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

// function createUser(fName, lName, email, age, address) {
//     const user = {};
//     user.fName = fName;
//     user.lName = lName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about; 
//     user.is18 = userMethods.is18; 
//     user.sing = userMethods.sing;  
//     return user;
// }

// const user1 = createUser('alok','sarma','alok@gmail.com', 20,"my address");
// const user2 = createUser('aaalok','dsarma','adlok@gmail.com',40,"my is address");
// const user3 = createUser('ram','dsarma','adlok@gmail.com',40,"my is address");
// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.sing());

//  POBLEMS : userMethods t jodi nth number of method taka tatia createUser function t jodi address to store koribola pahori gola problem hoi jabo so atu right way to nohoi .....




// SOLUTION  is : 

/*      does't matter userMethods t 1000 ba nth number method bonu every method can call . kuntu line r pora call  hbo         const user = Object.create(userMethods);       r pora    */

// const user = Object.create(userMethods);   ai line tu a emopty object print korisa aru logota chain/bond  create korisa




const userMethods = {
    about : function () {
        return `${this.fName} is ${this.age} years old`;
    },
    is18 :  function () {
        return this.age >= 18;
    },
    sing: function(){
        return ' sing aaabbbccc..';
    }
}

function createUser(fName, lName, email, age, address) {
    const user = Object.create(userMethods);  // create empty object.  atu type t kora fida hol prototype chain boni jabo 
    ///proto to userMethod t toka method kheni set hoi jabo . proto hoisa userMethods r reference 
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('alok','sarma','alok@gmail.com', 20,"my address");
const user2 = createUser('aaalok','dsarma','adlok@gmail.com',40,"my is address");
const user3 = createUser('ram','dsarma','adlok@gmail.com',40,"my is address");

console.log(user1);         
console.log(user1.about());   // about() method to kor pa call hoisa createUser() function pa to call hua ni tar pa __proto__ la gol aru tat sala about method asa naki , asa so call kori dela 
console.log(user1.is18());
// console.log(user2.about());
// console.log(user3.sing());
