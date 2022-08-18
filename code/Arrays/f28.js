// for loop      in array 


let letter = ["a","b","c","d"];

console.log(letter.length);
console.log(letter[letter.length-1]);

let letter2 =[];
for(i=0;i < letter.length;i++) {
    // console.log(letter[i].toUpperCase());
    letter2.push(letter[i].toUpperCase());
}

console.log(letter2);



//use const for creating array

    //heap memory  ["apple", "mango"] 0x11

const fruits = ["apple", "mango"];  //0x11
fruits.push("banana");
console.log(fruits);

//jab bhi reference type use karunga tab const use karunga//
