// store methods in different object
//how to effeciently store methods in different object
// Factory functions & discuss some memory related problem


// not a effecient way to memory utilities
function createUser(fName,lName,email,age,address){
    const user = { };
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.fName} is ${this.age} years old`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}   

const user1 = createUser('alok','sarma','alok@gmail.com', 20,"my address");
const user2 = createUser('aaalok','dsarma','adlok@gmail.com',40,"my is address");
const user3 = createUser('ram','dsarma','adlok@gmail.com',40,"my is address");



/* Note ==>
    atu type korila potibara about aru is18 method to jiman bar user bonibbo (mna user1,user2,......user n ) himan bar about and is18 method are create and jiman bar create hobo himan bar memory r vitrt method to store hbo .  */
// ai method tur 1 ta copy laga karn ai method same (user1,user2,user3 r karna ai method r deffination to same takibo eat kunu change nai) but atia user1 r baba 1bar bonisa method to then user2 r karna bonisa ako user3 karna bonisa  





//another way :  ---> effecient way to memeory utilities

//blag ka object bonalu aru tat key value pair about and is18 2ta a 1ta 1ta method
// memory vitrt userMethods function balag ka store kori lolu
  

    //ana ka korila      js t userMethods r about & is18 method to memeory t store hoi gol 

const userMethods = {
    about : function () {
        return `${this.fName} is ${this.age} years old`;
    },
    is18 :  function () {
        return this.age >= 18;
    }
}

function createUser(fName, lName, email, age, address) {
    const user = {};
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;  //store refernce / address of userMethods      // jatia ami ai method (about method) to call korim tatia JS jabo   ear address la jabo (manaa about method r address userMethods function r vitr t toka about method to la jabo)   aru call kori debo 
    // proti bar jatia object create korim tatia proti to method (example: about and is18 method ) create nohoi  1bar a create kora hol aru eatt internly JS a method tur refernce/address store korisa .jatia JS a method tu call koribo hobo tatia direct userMethods la goi call koribo 
    user.is18 = userMethods.is18;   //store refernce / address of userMethods
    return user;
}

const user1 = createUser('alok','sarma','alok@gmail.com', 20,"my address");
const user2 = createUser('aaalok','dsarma','adlok@gmail.com',40,"my is address");
const user3 = createUser('ram','dsarma','adlok@gmail.com',40,"my is address");
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
