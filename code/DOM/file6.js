// get and set attrubutes

// getAttribute() method : returns the value of an element's attribute.

// The setAttribute() method : sets a new value to an attribute.


const link = document.querySelector("a");
console.log(link.getAttribute("href") .slice(1));
link.setAttribute("href", "https://aloksarmah.netlify.app/");
console.log(link.getAttribute("href"));


const inputElement = document.querySelector(".form-todo input")
console.log(inputElement.getAttribute('type'));
