// defult parameters 

    //old method to handle undefine 
// function addTwo(a,b){
//     if(typeof b === 'undefined'){
//         b = 0;
//     }
//     return a+b;
// }

// const ans = addTwo(4);
// console.log(ans);


    // this is defult parameter    use to handle undefine
function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4);
console.log(ans);

