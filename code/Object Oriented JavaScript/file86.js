// super method in base class 


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

class Dog extends Animal{
    constructor(name,age ,speed){
        super(name,age);
        this.speed = speed;
    }
    eat(){
        return `Modified Eat : ${this.name} is eating `
    }
    run(){
        return`${this.name} is runing at ${this.speed}kmph`;
    }
}

const tommy = new Dog("tommy",4,56);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());
