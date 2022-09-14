// some old methods to support poor IE(internet explorer) 
// appendChild
// insertBefore
// replaceChild
// removeChild


// The appendChild() method appends a node (element) as the last child of an element.
// The insertBefore() method inserts a child node before an existing child
// The replaceChild() method replaces a child node with a new node.
// The removeChild() method removes an element's child.





const ul = document.querySelector('.todo-list')

// new element
const li = document.createElement('li')
li.textContent = 'new to do23  list'

const referenceNode = document.querySelector('.text')

ul.replaceChild(li, referenceNode)

ul.removeChild( referenceNode)


ul.appendChild(li)
ul.insertBefore(li, referenceNode)
