// events behind the scenes

  

console.log('script start !!!!')

const allButtons = document.querySelectorAll('.my-buttons button')

allButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let num = 0
        for(let i = 0; i< 1000000000; i++){
            num +=i;
        }
        console.log(e.currentTarget.textContent, num)
    })
})


let outerVar = 0
for(let i = 0; i<1000000; i++){
    outerVar +=i; 
}
console.log('value of outerVar is ', outerVar)

console.log('script end !!!!')

  

console.log('script start !!!!')

const allButtons = document.querySelectorAll('.my-buttons button')

allButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let num = 0
        for(let i = 0; i< 1000000000; i++){
            num +=i;
        }
        console.log(e.currentTarget.textContent, num)
    })
})


let outerVar = 0
for(let i = 0; i<1000000; i++){
    outerVar +=i; 
}
console.log('value of outerVar is ', outerVar)

console.log('script end !!!!')
