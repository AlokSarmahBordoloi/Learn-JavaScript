// event object


const firstButton = document.querySelector("#one")

firstButton.addEventListener("click", function(abc){
    console.log(this)
    console.log(abc)
});



//Notes :
// jab bhi mai kisi bhi element pe even Listener add hoga 
// js engine ---> line by line execute karta hai
// browser ---> js engine + extra features
// browser ---> js engine + webAPI

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai
// browser ---> 2 ta kam koribo ---
// 1. callback function hai vo js engine ko degi ...(ai function to execute koribo debo)
// 2. callback function ke sath browser jo event hua hai information bhi dega
// ye information hamein ek object ke form mai mailegi



// use ra  My button 1 t click kori dela , browser ra callback function to js engine k execute kori bola de debo , aru run hbo , ami 'this' print korisu so  'this' r value print hbo.




const allButton = document.querySelectorAll(".my-buttons button")

for(let button of allButton){
    button.addEventListener("click", (e)=>{
        // console.log(this.textContent)
        console.log(e)
    })
}

/*  The target event property returns the element that triggered the event.

    The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.   */


for(let button of allButton){
    button.addEventListener("click", (e)=>{
        // console.log(e.target)
        console.log(e.currentTarget)
    })
}
