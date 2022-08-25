// class keyword

//class are fake in js
/*  Class syntax :
    Use the keyword class to create a class.
    Always add a method named constructor():
    syntax:
            class ClassName {
                constructor() { ... }
            }

   Class keyword :  A JS class is not an object. it is a template for js objects.A JS class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.  */

    


class CreateUser{
    constructor(fName, lName, email, age, address){
        console.log("constructor called")
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.fName} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return' sing aaabbbccc..';
    }
    func(a){
        console.log(a)
    }
}

const user1 =  new CreateUser('alok','sarma','alok@gmail.com', 20,"my address");
const user2 = new CreateUser('aaalok','dsarma','adlok@gmail.com',5,"my is address");
const user3 = new CreateUser('ram','dsarma','adlok@gmail.com',40,"my is address");

console.log(user1.fName);
console.log(user2.is18());
console.log(user3.about());
console.log(Object.getPrototypeOf(user1));
user1.func('alok sarmah bordoloi');


/* Important Note :   
jatia ami object create korim    new keyword    logi tatia amar constructor call hbo but  
new keyword    nologala ami constructor  call/invoke  koribo nurim .
