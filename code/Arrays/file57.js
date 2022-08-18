// find method

// The find() method returns the value of the first element that passes a test . 

const myArray = ["Hello","dog","tiger","cat"];

function isLength(string){
    return string.length === 3;
}

const ans = myArray.find(isLength);
console.log(ans);


//In arrow fuction
const ans1 = myArray.find((string) => string.length === 3);
console.log("ans1 in arrow function form ",ans1);



//example:
const users = [
    {userId: 1, userName: "Alok"},
    {userId: 2, userName: "Nitish"},
    {userId: 3, userName: "Himansu"},
    {userId: 4, userName: "Kunal"},
    {userId: 5, userName: "Mohit"}
];

const myUser = users.find((user)=> user.userId === 3);
console.log(myUser);





