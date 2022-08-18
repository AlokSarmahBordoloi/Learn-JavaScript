//object destructuring


const ban = {
    banName: "alok sarmah",
    banLocation: "Assam",
    age: 20,
    year: 2022,
};

// const banName = ban.banName;
// const banLocation = ban.banLocation;
// console.log( banName , banLocation);


                    //destructuring start

// const {banName, banLocation} = ban; 
//const{banName:var1, banLocation} = ban;       // change variable name 
const{banName:var1, banLocation , ...restProps } = ban;         // age and year are store in another variable than do this .



console.log(var1);
// console.log(banName);
console.log(restProps);
