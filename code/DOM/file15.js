// clone node

/*
    The cloneNode() method creates a copy of a node, and returns the clone.

    The cloneNode() method clones all attributes and their values.

    Set the deep parameter to true if you also want to clone descendants (children).        */


const ul = document.querySelector(".todo-list")
const li = document.createElement('li')
li.textContent = "new todo!!"
const li2 = li.cloneNode(true)
ul.append(li)
ul.prepend(li2)
