// class practice & extends keyword

//example:
// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     isName(){
//         return `this is ${this.name}`;
//     }
//     isAge(){
//         return this.age>=18;
//     }
// }

// const a = new Animal('cow',20);
// const b = new Animal('elephant',76);
// console.log(a.isName());
// console.log(a.isAge())
// console.log(Object.getPrototypeOf(a))



//example:
class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isAge(){
        return this.age<=30;
    }
    isCute(){
        return true;
    }
}
const Animal1 = new Animal('tom',44)
console.log(Animal1);
console.log(Animal1.eat());
console.log(Animal1.isAge());
console.log(Animal1.isCute());



//example dog class:
class Dog extends Animal{           // Dog = sub class  , Animal = parent class

}

const tommy = new Dog("tommy", 3);
console.log(tommy.isAge());
console.log(tommy.eat());



// new a constructor call kora 
