// event bubbling / event propagation
// event capturing
// event delegation


// event bubbling :
// Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event.
// The bubbles event property returns a Boolean value that indicates whether or not an event is a bubbling event.


const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

child.addEventListener('click', ()=>{
    console.log('you clicked on child')
})

parent.addEventListener('click', ()=>{
    console.log('you clicked on parent')
})

grandparent.addEventListener('click', ()=>{
    console.log('you clicked on grandparent')
})

document.body.addEventListener('click', ()=>{
    console.log('you clicked on body')
})




// event capturing : 
// In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements. Capturing happens before bubbling. 


child.addEventListener('click', () => {
    console.log('capture !!!! child')
}, true)

parent.addEventListener('click', () => {
    console.log('capture !!!! parent')
}, true)

grandparent.addEventListener('click', () => {
    console.log('capture !!!! grandparent')
}, true)

document.body.addEventListener('click', () => {
    console.log('capture !!!! body')
}, true)


// // not capture

child.addEventListener('click', () => {
    console.log('bubble child')
})

parent.addEventListener('click', () => {
    console.log('bubble parent')
})

grandparent.addEventListener('click', () => {
    console.log('bubble grandparent')
})

document.body.addEventListener('click', () => {
    console.log('bubble body')
})




// event delegation :
// Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

grandparent.addEventListener('click', ()=>{
    console.log('you clicked something !!!')
})

grandparent.addEventListener('click', (e) =>{
    console.log(e.target)
    console.log(e.target.textContent)
})
