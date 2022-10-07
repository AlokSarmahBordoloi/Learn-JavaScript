//  Promise
 

/* Promise :    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. */


// resolve() :  The Promise.resolve() method "resolves" a given value to a Promise 

// reject() :   The Promise. reject() method is used to return a rejected Promise object with a given reason for rejection. It is used for debugging purposes and selective error catching.

// then() :   The then method returns a Promise which allows for method chaining. If the function passed as handler to then returns a Promise , an equivalent Promise will be exposed to the subsequent then in the method chain.

// .catch() : A catch -block contains statements that specify what to do if an exception is thrown in the try -block. 





console.log('script start')

bucket = ['coffee', 'chips', 'rice', 'salt', 'vegetables']

const friedRice = new Promise((resolve, reject) => {
    if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
        resolve('fried rich')
        // resolve({value:'friedrich'}) // pass object
    } else {
        reject('couldnot do it')
        // reject(new error('something missing from bucket'))  // create error object
    }
})

// produce


// consume / how to consume

friedRice.then(
    // jab promise resolve hoga
    (myfriedrich) => {
    console.log('lets eat', myfriedrich)
    }
    // ,  
    /* then() r vitrt 2ta callback function pass nokorilu hoi ... jodi resolve r care koribo dorkar ni then   null   likhili hbo tatia reject to care koribo ..  or only 1ta callback function pass korilu hoi .   */

    // jab promise reject hoga
    // (error) => {
    //     console.log(error)
    // }                      
    ).catch((error)=>{
    console.log(error)
    })
 
setTimeout(()=>{
    console.log('this is setTimeout')
},0)

for(let i = 0; i<=100; i++){
    console.log(Math.random(), i)
}


console.log('script end')
