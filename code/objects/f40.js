// nested destructuring

const users = [
    {userId: 1,firstName: 'Alok', age:20},
    {userId: 2,firstName: 'Ram', age:40},
    {userId: 3,firstName: 'Kunal', age:28}
]


// Destructuring :   

//   need users to extra extra objects 
const [ user1, user2 , user3] = users;
console.log(user1);


//we need user1 1stName and user3 age 
const [{firstName: userFirstName,userId}, , {age}] = users;     //{} are use because destructure to obejcts 
                                                                //change variable name than example : firstName: userFirstName

console.log(userFirstName);
console.log(userId);
console.log(age);
