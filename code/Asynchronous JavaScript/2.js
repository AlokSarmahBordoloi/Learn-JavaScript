// setInterval and clearInterval 


/* setInterval :   The setInterval() method calls a function at specified intervals (in milliseconds)
    The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.   */

/* clearInterval :
    The clearInterval() method clears a timer set with the setInterval() method   */

//exampls:

console.log('script start')
setInterval(()=>{
   console.log(Math.random())
}, 500)
console.log('script end')



// change background color per sec :
const body = document.body
const button = document.querySelector('button')

const intervalId = setInterval(() =>{
    const red = Math.floor(Math.random() * 126)
    const green = Math.floor(Math.random() * 126)
    const blue = Math.floor(Math.random() * 126)
    const rgb = `rgb(${red}, ${green}, ${blue})`
    body.style.background = rgb
    // console.log(rgb)
},500)

button.addEventListener('click',()=>{
    clearInterval(intervalId)
    button.textContent= body.style.background
} )

console.log(intervalId)
