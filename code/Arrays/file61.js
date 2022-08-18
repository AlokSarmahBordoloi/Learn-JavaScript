// splice method
//    The splice() method adds and/or removes array elements.The splice() method overwrites the original array.  

// start , delete , insert

//example:
const myArray = ['item1','item2','item3'];

//delete
// const deleteItem = myArray.splice(1,1);
// console.log("deleted item", deleteItem);
// console.log(myArray);


//insert
// myArray.splice(1,0,'inserted item');
console.log(myArray);


//insert and delete 
const deleteItem2 = myArray.splice(1,2,"inserted i1","inserted i2");
console.log("delete items are : ",deleteItem2)
console.log(myArray);