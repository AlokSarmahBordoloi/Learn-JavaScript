// iterables

// iterables : jispe hum for of loop laga sake

//  string , array are iterable


// const firstName = "Alok";

// for(let char of firstName){
//     console.log(char);
// }

const items = ['item1', 'item2', 'item3'];
for(let item of items){
    consol.log(item);
}

const users = {'key1': 'value1', 'key2': 'value2'};
for(let user of users){
    console.log (user);     //error : object is not a iterable
}

// array like object  
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string


const firstName = "Alok";
console.log(firstName.length);
console.log(firstName[2]);
