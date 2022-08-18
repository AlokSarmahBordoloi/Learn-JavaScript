// Maps
// map is an iterable 

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects 

// objects can only have string or symbol
// as key

// in maps you can use anythings as key 
// like array , number , string


// object literals
// key ---> string 
// key ---> Symbol
const person = {
    firstName: "Alok",
    age: 20,
    1:'one'
}
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);

for(let key in person){
    console.log(typeof key);
}


// key value pair
const person2 = new Map();
person2.set('firstname', 'Alok');  //map use korila key jekunu type ra rakibo pari
person2.set('age',7);
person2.set(1,'one');
// person2.set([1,3,4],'onetwothree');
// person2.set({1: 'one'}, 'object literal');
// console.log(person2);
// console.log(person2.get(1))
// console.log("age is",person2.get('age'));
// console.log(person2.keys()); // keys method : gotai keys bur print koribo use kora

// for(let key of person2.keys()){
//     console.log(key, typeof key);
// }

// get() method in JavaScript is used for returning a specific element among all the elements which are present in a map.

for(let [key, value] of person2){   //destructraing key value pairs
    console.log(key, value);
    // console.log(Array.isArray(key));
}

const person6 = {
    id : 1,
    fName : "Alok"
}
const person7 = {
    id : 2,
    fName : "Swapnil"
}

const extraInfo = new Map(); 
extraInfo.set(person6,{age: 34, gender: 'male'});
extraInfo.set(person7,{age: 9, gender: 'female'});
// console.log(extraInfo);
console.log(person6.id);
console.log(extraInfo.get(person6).age);  // find age extraInfo pora
console.log(person7.fName);
console.log(extraInfo.get(person7).gender);
console.log(extraInfo.get(person7).age);

// const person4 = new Map([['firstName','Alok'], ['age',20]]);
// console.log("2 array", person4);
