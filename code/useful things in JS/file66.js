// optional chaining (?.)

// allows you to access the value of a property located deep within a chain of objects without explicitly checking if each reference in the chain is null or undefined .


const user = {
    fName : "Alok",
    // address: {houseNumber: '786'}
}

console.log(user?.fName);   // jodi user exit kora tatia ha muk fName deok . jodi  user  exit nokora undefine or null hoi tatia fName la naju eat a proced kori dim
console.log(user?.address?.houseNumber);

