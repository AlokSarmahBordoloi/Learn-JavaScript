//Object in JS
// objects store key(property) value pairs. Object don't have index. Object is refernce type.



//create object
// const person = {name:"Alok",age: 20};
const person = {
    name: "alok",
    age: 20,
    hobbies: ["guitar" ,"sleeping", "listening music"]
}

console.log(person); 


//Access data from obejcts
console.log(person["name"]);
// console.log(person.name);
console.log(person.age);
console.log(person.hobbies); 


//Add key value pair to objects
person["gender"] = "male";
// person.gender = "male";
console.log(person);
