// how to iterate object

const person = {
    name: "alok",
    age: 20,
   "person hobbies": ["guitar" ,"sleeping", "listening music"]
}

// for in loop 
// object.keys


//for in loop method (iterate object) :
for(let key in person){
    console.log(person[ key]);
    console.log(`${key} : ${person[key]}`);
    console.log(key,":",person[key]);
    console.log(key);
}



// Object.keys() method (iterate object) :
console.log(Object.keys(person));



//person is array or not check 
const vr = Array.isArray((Object.keys(person)));
console.log(vr);


//iterate Array
for(let cr of Object.keys(person)) {
    console.log(person[cr]);
}
