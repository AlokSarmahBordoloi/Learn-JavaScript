// hasOwnProperty

// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).



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


for (let key in user1) {
    // console.log(key);    // function t toka key logta prototype t toka key kheni u print koribo
    if(user1.hasOwnProperty(key)){         // only function t toka key kheni ha print koribo 
        console.log(key);
    }
}
