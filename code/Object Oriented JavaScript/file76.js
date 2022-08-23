// object.create 

//   1st obj2.key obj2 asa nai jodi nai tatia ami besaru undefine nulai obj1 la gusi jai ... tat sabo key1 asa nai tar pa js k tat key1 pai tatia htu print kori debo .



const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {}
//     obj2.key3 = "value3";  //empty object create kori u key value pair ana ka add koribo pari 

// const obj2 = {
//     key3: "value3"
// }
// console.log(obj2.key1);


//there is one more way to create empty object
const obj2 = Object.create(obj1); // {}   empty object 
obj2.key3 = "value3";  
// obj2.key2 = "unique";  // js a 1st obj2 t key2 asa nai sai lobo jodi notoka hola obj1 t goi sala hoi 
console.log(obj2.key2);     // obj2.key2  key2 tu obj2 t nai so   create() r parenthes  likha obj hai obj tur usert js nija jabo manaa create(obj1) r obj1 object r usert js jabo aru tat sabo key2 asa nai jodi asa value tu pai jabo .

console.log(obj2)
console.log(obj2.__proto__);  // print:  {key1: 'value1', key2: 'value2'}
