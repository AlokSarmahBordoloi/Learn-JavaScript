// innerHTML

// The innerHTML property sets or returns the HTML content (inner HTML) of an element.


const headline = document.querySelector(".headline")
console.log(headline.innerHTML);

headline.innerHTML = "<h1> inner html changed </h1>";
headline.innerHTML += "<button class = \"btn\" > Learn More </button>"
console.log(headline.innerHTML);
