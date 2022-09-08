// get multiple elements using getElementsByClassName
// get multiple elements items items using querySelectorAll



/* getElememtsByClassName() :
    The getElementsByClassName() method returns an array-like of objects of the child elements with a specified class name. The getElementsByClassName() method is available on the document element or any other elements. The method returns the elements which is a live HTMLCollection of the matches elements.              */

const navItem = document.getElementsByClassName("nav-item");   // HTMLCollection
console.log(navItem);
console.log(navItem[2]);
console.log(typeof navItem);
console.log(Array.isArray(navItem));



/* querySelectorAll() :
    querySelectorAll() The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.          */

const navItem2 = document.querySelectorAll(".nav-item");  // NodeList 
console.log(navItem2);
console.log(navItem2[2]);
