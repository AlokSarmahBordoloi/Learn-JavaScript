// select element using query selector 

// The querySelector() method returns the first element that matches a CSS selector.

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header= document.querySelector(".header");
console.log(header);

const navItem = document.querySelector(".nav-item")
console.log(navItem);

// querySelector : nav-item r class t   1st element pua pesot baki 2nd,3rd ai burok check nokora 


// querySelectorAll() :
// The querySelectorAll() method returns all elements that matches a CSS selector(s).

const navItem2 = document.querySelectorAll(".nav-item")
console.log(navItem2);
