// getter and setters 

// class person{
//     constructor(fName, lName , age){
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.fName} ${this.lName}`;
//     }
//     setName(fName,lName){
//         this.fName = fName;
//         this.lName = lName;
//     }
// }


// const person1 = new person("alok", 'sarma', 20);
// console.log(person1);
// console.log(person1.lName);
// console.log(person1.age);
// console.log(person1.fullName());
// console.log(person1.fullName);
// console.log(person1.fName);

//object bonua pesot fName and lName change koribola hola   2ta type t koribo pari :  
// 1st method 
// person1.setName("Mohit", "Varma");
// 2nd Method :
// person1.fName = "Mohit";
// person1.lName = "Varma";
// console.log(person1.fName);
// console.log(person1.lName); 
// console.log(person1);
// console.log(person1.fullName);




// object bonu a pesot fName , lName change koribola setName method use korisu 

// method k call koru ami(example: person1.fullName() ) .
// properties k ami call nokoru (example: person1.lName )



// use of setter method 

class person{
    constructor(fName, lName , age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    get fullName(){
        return `${this.fName} ${this.lName}`;
    }
    set fullName(fullName){
        // fullName.split(" ")
        // example: jodi fullName Mohit Varma hoi tatia .split() use korila [Mohit, Varma] hbo . 
        const [fName, lName] = fullName.split(" ")     //array destructuring  and use split method   ( list tu destructure korisa)
        this.fName = fName;
        this.lName = lName;
    }
}

const person1 = new person("alok", 'sarma', 20);
console.log(person1);
console.log(person1.fullName);
console.log(person1.lName);

person1.fullName = "Mohit Verma";
console.log(person1);
console.log(person1.fullName);


// split() : The split() method splits a string into an array of substrings. The split() method returns the new array.
// split() a string r list boni debo.  string tur jota space takibo tat a split kori list boni debo
