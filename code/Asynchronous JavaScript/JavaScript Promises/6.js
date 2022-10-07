// function returning promise

function ricePromise(){
    bucket = ['coffee', 'chips', 'rice', 'salt', 'vegetables']
    return new Promise((resolve, reject) => {
        if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
            resolve('fried rich')
        } else {
            reject('couldnot do it')
        }
    })
}


ricePromise().then(
    (myfriedrich) => {
    console.log('lets eat', myfriedrich)
    }               
).catch((error)=>{
    console.log(error)
})
