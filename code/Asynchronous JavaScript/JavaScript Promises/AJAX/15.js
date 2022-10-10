// async await

/*
The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs. 
The behavior of async / await is similar to combining generators and promises. Async functions always return a promise


async function:
    An async function is a function declared  with the async keyword, and the await keyword is permitted within it. 
    The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains

await :
    The await operator is used to wait for a Promise and get its fulfillment value. 
    It can only be used inside an async function or a JavaScript module.    */




console.log('script start')


const URL = "https://jsonplaceholder.typicode.com/posts"

const n = fetch(URL)
    .then(Response=>{
        return Response.json()
    })
    .then(data =>{
        console.log(data)
    })

//GET request :

async function getPosts(){
    const response = await fetch(URL)    // await a fetch(URL) promise to resolve/reject hua la wait koribo
    if(!response.ok){
        throw new Error('something went wrong!!')
    }
    const data = await response.json()   //await a wait koribo resolve nuhua la ka 
    return data  //return promise korisa
}

const myData = getPosts()
console.log(myData)  // output: promise pam 

getPosts()
    .then(myData =>{
        console.log(myData)
    })
    .catch(error =>{
        console.log('inside catch')
        console.log(error)
    })



console.log('script end!!')



// arow function :(t ana ka kora)

const getPosts = async() =>{
    const response = await fetch(URL)    
    if(!response.ok){
        throw new Error('something went wrong!!')
    }
    const data = await response.json()
    return data
}

getPosts()
    .then(myData =>{
        console.log(myData)
    })
    .catch(error =>{
        console.log('inside catch')
        console.log(error)
    })
