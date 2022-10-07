// promise.resolve 
// promise chaining


// promise.resolve :
// const myPromise = Promise.resolve(5)
// myPromise.then(value =>{
//     console.log(value)
// })


//then() : allows return promise .



// promise chaining :
function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve('foo')
    })
}

myPromise()
.then(value=>{
    console.log(value)
    value+= 'bar'
    return value   // return promise  (only promise t then logabo pari string t nuri)
    // return Promise.resolve(value)    // internely ana ka hoi asa
})
.then(value =>{
    console.log(value)
    value+= 'baazz'
    return value
})
.then(value=>{
    console.log(value)
})
