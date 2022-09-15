// this keyword

// addEventListener() :  The addEventListener() method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.




const btn = document.querySelector('.btn-headline')

btn.addEventListener('click', function(){
    console.log('you clicked meee!!!!')
    console.log('value of this')
    console.log(this)
})           // atu r karna 'this' r value btn hbo karn  addEventListener method btn a call korisa so  'this'  r value btn  a hbo .


function myFunc(){
    console.log('you clicked meee!!!')
    console.log('value of this')
    console.log(this)
}

btn.addEventListener('click',myFunc)


//arrow function:
btn.addEventListener('click', ()=>{
    console.log('you clicked meee!!!!')
    console.log('value of this')
    console.log(this)
})




// (normal function r karona) junto elemrnt t eventListener add korim   'this'  r value hai element to a hbo .
// arrow function r case t  'this'  r value 'window' hbo .
