// Fetch API 

// The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses.



const URL = "https://jsonplaceholder.typicode.com/posts"

// const n = fetch(URL)
//     .then(response =>{
//         return response.json()
//     })
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(error=>{
//         console.log('inside catch')
//         console.log(error)
//     })


    // fetch  reject tatia hbo jatia network related error(404) ahibo   / error takilu  catch() nai sola but then() soli takibo mana respone pai takim ami 

// relaible koribola ana ka koribo parim : //GET
    // const n = fetch(URL)
    //     .then(response =>{
    //         if(response.ok){
    //             return response.json()
    //         }else{
    //             throw new Error('something went wrong!!')
    //         }
    //     })
    //     .then(data =>{
    //         console.log(data)
    //     })
    //     .catch(error=>{
    //         console.log('inside catch')
    //         console.log(error)
    //     })
   
  
// POST 
    const n = fetch(URL,{
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        })

        .then(response =>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error('something went wrong!!')
            }
        })
        .then(data =>{
            console.log(data)
        })
        .catch(error=>{
            console.log('inside catch')
            console.log(error)
        })
