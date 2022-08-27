// static methods and properties

// Static class methods are defined on the class itself.
// can't call a static method on an object, only on an object class.


class Person{
    constructor(fName, lName , age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
// static method
    static classInfo(){
        return `this is person class`;
    } 
//static property
    static desc = 'static property';

    get fullName(){
        return `${this.fName} ${this.lName}`;
    }
    setName(fName,lName){
        this.fName = fName;
        this.lName = lName;
    }
    eat(){
        return `${this.fName} is eating`;
    }
    isAge(){
        return this.age<=30;
    }
    isCute(){
        return true;
    }
}

const person1 = new Person('alok','sarma',33);
console.log(person1.eat());

//static method call koribola class  r pora call koribo pari object bonabola dorkar ni 
const info = Person.classInfo();
console.log(info);

console.log(Person.desc);
