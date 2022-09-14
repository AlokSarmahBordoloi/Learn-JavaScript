// create and insert element methods :

// createElement, append, prepend, remove, before, after


// documnet.createElement() method creates an element node
// The appendChild() method appends a node (element) as the last child of an element
// The createTextNode() method creates a text node.

const newTodoItem = document.createElement("li")
const newTodoItemText = document.createTextNode("Tech student") //create text node
newTodoItem.textContent = "Tech student";  //sort method add textNode
newTodoItem.appendChild(newTodoItemTexts) 
const todoList = document.querySelector(".todo-list")
newTodoItem.append(newTodoItemText)  

todoList.append(newTodoItem) // textContent last t add kora

todoList.prepend(newTodoItem)  // textContent starting t add koribo

console.log(newTodoItem)


// remove :  'Do this do that'

const Do_this_do_that = document.querySelector('.todo-list li')
Do_this_do_that.remove()
console.log(Do_this_do_that)




// before 
// after   
const newTodoItem = document.createElement("li")
newTodoItem.textContent = "tech student" 
const todoList = document.querySelector(".todo-list")
// todoList.before(newTodoItem)
todoList.after(newTodoItem) 




// notes :
// append() : append() method inserts a set of Node objects or string objects after the last child of the Element 
// prepend() : The Element. prepend() method inserts a set of Node objects or string objects before the first child of the Element
// before : The before() method inserts specified content in front of (before) the selected elements.
// after  : The after() method inserts specified content after the selected elements. 
