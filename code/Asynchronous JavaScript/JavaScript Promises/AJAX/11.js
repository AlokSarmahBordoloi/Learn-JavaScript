// XHR(XML HTTP Request)


// The XMLHttpRequest object can be used to request data from a web server.
// XMLHttpRequest (XHR) objects are used to interact with servers. 
// You can retrieve data from a URL without having to do a full page refresh. 
// This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.


/*
The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

0 	UNSENT -->	Client has been created. open() not called yet.
1 	OPENED -->	open() has been called.
2 	HEADERS_RECEIVED -->   send() has been called, and headers and status are available.
3 	LOADING -->  Downloading; responseText holds partial data.
4 	DONE -->  The operation is complete.
*/


/*JSON.parse() : 
   The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. */




const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest()
// console.log(xhr)


// step 1 :

// console.log(xhr.readyState)
xhr.open("GET",URL)
// console.log(xhr.readyState)


    // .onreadystatechange  state change hoi juar loga loga soli jaboo

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState === 4){
//     // console.log(typeof xhr.response)    // output :  string
//         const response = xhr.response

//         const data = JSON.parse(response)   //JSON data javascript object la change korisu
//         console.log(data)
//         // console.log(typeof data)    // output :  object
//     }
// }




xhr.onload = function(){      // onload method readystate 4 hola ha run koribo
    // console.log(xhr.readyState)  // output :  4
    const response = xhr.response
    const data = JSON.parse(response)
    console.log(data)
}

xhr.send();
