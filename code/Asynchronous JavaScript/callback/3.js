// simple callback

// function myFun(callback){
//     console.log('function is doing task 1')
//     callback()
// }

// function myFun2(){
//     console.log('function is doing task 2')
// }

// myFun(myFun2)
// myFun2()

// myFun(function(){
//     console.log('function is doing task 2')
// })


//example:
function getTwoNumbersAndAdd(num1, num2, onSuccess, onFailure){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        onSuccess(num1,num2)
    }
    else{
        // console.log('Wrong data type')
        onFailure()
    }
}

// function addTwoNumbers(n1 , n2){
//     console.log(n1+n2)
// }
// getTwoNumbersAndAdd('2',8, addTwoNumbers)


getTwoNumbersAndAdd('7',8, (num1, num2)=>{
    console.log(num1+num2)
}, ()=>{
    console.log('wrong data type')
    console.log('please pass numbers only')
})
