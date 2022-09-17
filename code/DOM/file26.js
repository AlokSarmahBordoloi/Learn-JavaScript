// keypress event
// mouseover event


// The onkeypress event occurs when the user presses a key (on the keyboard).


const body = document.body;

// body.addEventListener('keypress', (e)=>{
//     console.log(e.key)
// })


// The onmouseover event occurs when the mouse pointer is moved onto an element, or onto one of its children.
// The onmouseleave event occurs when the mouse pointer is moved out of an element


const mainButton = document.querySelector('.btn-headline')
// console.log(mainButton)

mainButton.addEventListener('mouseover', ()=>{
    console.log('mouseover event occured!!!')
})


mainButton.addEventListener('mouseleave', ()=>{
    console.log('mouseleave even occured!!!')
})
