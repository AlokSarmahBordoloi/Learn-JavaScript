// callbacks , callback hell , pyramid of doom
// asynchrounous programming 


// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// setTimeout(()=>{
//     heading1.textContent = "Heading 1"
//     heading1.style.color = "violet"
//     setTimeout(()=>{
//         heading2.textContent = "Heading 2"
//         heading2.style.color = "red"
//     },1000)
// },1000)




const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")


//callback hell 
setTimeout(()=>{
    heading1.textContent = "one 1"
    heading1.style.color = "violet"
    setTimeout(()=>{
        heading2.textContent = "two 2"
        heading2.style.color = "purple"
        setTimeout(()=>{
            heading3.textContent = "three 3"
            heading3.style.color = "red"
            setTimeout(()=>{
                heading4.textContent = "four 4"
                heading4.style.color = "yellow"
                setTimeout(()=>{
                    heading5.textContent = "five 5"
                    heading5.style.color = "green"
                    setTimeout(()=>{
                        heading6.textContent = "six 6"
                        heading6.style.color = "blue"
                        setTimeout(()=>{
                            heading7.textContent = "seven 7"
                            heading7.style.color = "brown"
                        },1000)
                    },3000)
                },2000)
            },1000)
        },2000)
    },2000)
},1000)




function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text
            element.style.color = color
            if(onSuccessCallback){
                onSuccessCallback()
            }
        }else{
            if(onFailureCallback){
                onFailureCallback()
            }
        } 
    },time)
}

// pyramid of doom
changeText(heading1, "one", "green", 1000,()=>{
    changeText(heading2, "two", "pink", 1000,()=>{
        changeText(heading3, "three", "red", 1000,()=>{
            changeText(heading4, "four", "green", 1000,()=>{
                changeText(heading5, "five", "blue", 1000,()=>{
                    changeText(heading6, "six", "yellow", 1000,()=>{
                        changeText(heading7, "seven", "red", 1000,()=>{
                            changeText(heading8, "eight", "blue", 1000,()=>{
                                changeText(heading9, "nine", "red", 1000,()=>{
                                    changeText(heading10, "ten", "gray", 1000,()=>{

                                    },()=>{console.log('heading10 doesnot exist')} )
                                },()=>{console.log('heading9 doesnot exist')} )
                            },()=>{console.log('heading8 doesnot exist')} )
                        },()=>{console.log('heading7 doesnot exist')} )
                    },()=>{console.log('heading6 doesnot exist')} )
                },()=>{console.log('heading5 doesnot exist')} )
            },()=>{console.log('heading4 doesnot exist')} )
        },()=>{console.log('heading3 doesnot exist')} )
    },()=>{console.log('heading2 doesnot exist')} )
},()=>{console.log('heading1 doesnot exist')} )
