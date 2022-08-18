// Set(it is iterable)
// store data 
// sets also have its own methods
// No index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)


// const items = ['i1','i2','i3'];
// const numbers = [1,2,3];
// const numbers = new Set([1,2,3]);
const numbers = new Set();
numbers.add(1);
numbers.add(2);     
numbers.add(['i1','i2']);
numbers.add(['i1','i2']);       // line 15,16 : now 2tai same holu add hbo karon 2ta a balag balag array ( 2ta r a address balag balag) .  JS t square backet [] logi array bonala memeory r viort new array bona its don't matter those elements are same or not .. htu array notun bonibo 
// numbers.add(items);
// numbers.add(items);  //17,18 lines :  doesnot store same array . 1bar a square backet logai array bonlu so ear 1ta a address so memeory t 1bar a store hbo 

if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}
console.log(numbers);

// .has() method : particular value is exists or not .

const number2 = new Set();
number2.add(1);
number2.add(2);
number2.add(3);
number2.add(4);
number2.add(5);
number2.add(6);
number2.add(7);
// console.log(number2);

for(let number of number2){
    console.log(number)
}

// usually unique items r karona Set use kora hoi

//abstract unique element  (array pa unique elements abstract koribo pari) 
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);  

//find length 
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);

