// classList , add and remove , toggle classes


// classList : The classList property returns the CSS classnames of an element. The classList property returns a DOMTokenList.

// class = section-todo
const sectionTodo = document.querySelector(".section-todo")
console.log(sectionTodo.classList)

sectionTodo.classList.add('bg-dark');  // classList.add --> add class

sectionTodo.classList.remove("container") // classLsit.remove --> remove class

const ans = sectionTodo.classList.contains('container')     // .contains --> Returns true if the list contains a class
console.log(ans)


sectionTodo.classList.toggle("bg-dark") // toggle :  class takila add kori dea 
sectionTodo.classList.toggle("bg-dark"); // 2times use korila remove kori debo



//class = header
const header = document.querySelector("header")
console.log(header.classList)
header.classList.add("bg-dark")
console.log(header.classList)





/* classList Properties and methods :

add()	       --->      Adds one or more tokens to the list
contains()	 --->      Returns true if the list contains a class
entries()	   --->      Returns an Iterator with key/value pairs from the list
forEach()	   --->      Executes a callback function for each token in the list
item()	     --->      Returns the token at a specified index
keys()	     --->      Returns an Iterator with the keys in the list length Returns the number of tokens in the list
remove()	   --->      Removes one or more tokens from the list
replace()	   --->      Replaces a token in the list
supports()	 --->      Returns true if a token is one of an attribute's supported tokens
toggle()	   --->      Toggles between tokens in the list value Returns the token list as a string
values()     --->      Returns an Iterator with the values in the list          */
