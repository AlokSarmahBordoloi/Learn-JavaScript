// This keyword
// console.log(window);

function myFun(){
    // console.log("hello world")
    console.log(this);      // when "use strict" is not use then output : window object
}

window.myFun();

function myFun1(){
    "use strict"
    console.log(this);      //when use "use strict" then output : undefine 
}
myFun1();

// this === window
// true
