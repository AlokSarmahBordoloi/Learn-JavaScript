// spread operator in Array

 const array1 = [1,3,6,8];
 const array2 = [78,98,64,2]

//  const newArray = [...array1];

const newArray = [..."asb"] // spread in elements

 console.log(newArray);



// spread operator in object                 //same key or property repetition is not allow

const obj1 = {
    key1: "v1",
    key2: "v2"
};

const obj2 = {
    key1: "hello",
    key3: "v3",
    key4: "v4"
};

// const newObj ={ ...obj1 , ...obj2};
const newObj = { ...obj2, ...obj1, key10 : "v87"};

console.log(newObj);


//convert string to object   or array to object or determine postion 
const newObj3 = { ..."abc" };
console.log(newObj3);
