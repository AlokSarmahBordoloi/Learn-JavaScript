// synchronous programming vs asynchronous programming

// JavaScript : synchronous , single threaded 


/* synchonous programming :     Synchronous is known as a blocking architecture and is ideal for programming reactive systems. 
As a single-thread model, it follows a strict set of sequences, which means that operations are performed one at a time, in perfect order.  */

console.log('script start')

for(let i = 1; i<10000; i++){
    console.log('inside for loop') // blocking the program (jatia la ka for loop to soli 'inside for look' print nokora tatia loi pesor line bur run nohoi)
}

console.log('script end')



/* Asynchronous programming :      Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to
 be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented 
 with the result. */
// Example of asynchronous programming :
/* setTimeout function : 
     The setTimeout() method calls a function after a number of milliseconds.   */

//normal function:
console.log('script start !!!')
function hello(){
    console.log('hello world!')
}
setTimeout(hello, 1000)    // hello function to max to max 1sec(1000) pesot call koru / 1sec r delay hbo lagibo 
console.log('script endd !!')


//arow function:
console.log('script start !!!')
setTimeout(()=>{
    console.log('inside setTimeout')
}, 0)

for(let i = 1; i< 100; i++){
    console.log('....')
}
console.log('script end !!')
 


/* claerTimeout() : 
      The clearTimeout() method clears a timer set with the setTimeout() method. */

console.log('script start !!!')
const id = setTimeout(()=>{
    console.log('inside setTimeout')
}, 0)

for(let i = 1; i< 100; i++){
    console.log('....')
}
console.log('setTimeout id is ', id)
console.log('clearing time out')
clearTimeout(id)
console.log('script end !!')
