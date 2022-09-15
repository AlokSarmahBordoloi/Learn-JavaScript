// click event on multiple buttons

const allButtons = document.querySelectorAll('.my-buttons button')

// console.log(allButton)
// firstButton.addEventListener("click", function(){
//     console.log('you click me')
// })


// for(let button of allButton){
//     button.addEventListener("click", function(){
//         console.log('you click me!!!!!!')
//     })
// }



// for(let button of allButton){
//     button.addEventListener("click", function(){
//         console.log(this.textContent)
//     })
// }



// arrow function : arrow function t 'this'  'window' hbo  
// for(let button of allButton){
//     button.addEventListener("click",()=>{
//         console.log(this.textContent)
//     })
// }


// for(let i = 0; i< allButtons.length ; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this)
//     })
// }


allButtons.forEach(function(button){
   button.addEventListener("click", function(){
    console.log(this)
   }) 
});
