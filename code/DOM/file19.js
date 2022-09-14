// intro to events

//click
// event add karne ka 3 tarike hai


const btn = document.querySelector('.btn-headline')
// console.dir(btn)
// btn.onclick = function(){
//     console.log('you ckick me !!!!!!!')
// }


// method --->   addEventListener

// 1st type:
// function clickMe(){
//     console.log('you click mee !!!')
// }

// btn.addEventListener('click', clickMe)


// 2nd type:
// btn.addEventListener('click', function(){
//     console.log('you clicked meee!!!!')
// })

// use arrow function
btn.addEventListener('click', ()=>{
    console.log('arrow function')
} )
