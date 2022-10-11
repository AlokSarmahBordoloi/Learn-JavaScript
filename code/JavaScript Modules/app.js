import {fName} from './utils/fname.js'
// import {fName as fn} from './utils/fname.js'  //fName r place t fn (small koribo) pari
import { age } from './utils/age.js'
import Person, {Person2,Person3} from './utils/person.js'  
// import hello, {Person2,Person3} from './utils/person.js'  




// console.log(fn,age)
console.log(fName,age)


const person = new Person('Alok','sarmah',20)
const person2 = new Person2('Varun','Bora',20)
const person3 = new Person3('Rohit','Sarmah',20)
person.info()
console.log(person)
person2.info()
console.log(person2)
person3.info()
console.log(person3)

// console.log(hello)
