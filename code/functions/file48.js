// Rest parameters

/*  Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. */

//example:
// function myFuc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFuc(2,4,7,19,6,84,1,32);



//example:
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans =addAll(1,2,3,4,5);
console.log(ans);