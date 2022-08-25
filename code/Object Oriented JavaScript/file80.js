// new keyword  (2.0)


// new keyword : 
// 1) create empty object   this = {}
// 2) return {} (this)



// constructor function 
function CreateUser(fName, lName, email, age, address) { 
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
    return `${this.fName} is ${this.age} years old`
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
    
};
CreateUser.prototype.sing = function(){
   return' sing aaabbbccc..';
};

const user1 =  new CreateUser('alok','sarma','alok@gmail.com', 20,"my address");
const user2 = new CreateUser('aaalok','dsarma','adlok@gmail.com',40,"my is address");
const user3 = new CreateUser('ram','dsarma','adlok@gmail.com',40,"my is address");
console.log(user1);         
console.log(user1.about()); 
console.log(user1.is18());
console.log(user2.sing());



//    ai function to ja new keyword logi call korim hatu kana ka gom pam ?? 
//  ear karonaa 1ta convesion asa  :   ami ana kua function create korisu fucture t new logi a call korila ha kam koribo tatia ami    function r name to  CAPTIAL LETTER  ( example: function CreateUser(){} ) ra likhibo lagibo 
