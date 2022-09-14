// create and insert element methods:


// element.insertAdjacentHTML(where, html)
// beforebegin
// aferbegin --> prepand r nisena kam kora
// beforeend --> append r nisena kam kora
// afterend

// The insertAdjacentHTML() method inserts HTML code into a specified position.


const todoList = document.querySelector(".todo-list")
todoList.insertAdjacentHTML("beforeend", "<li>Tech Students</li>")
todoList.insertAdjacentHTML("afterbegin", "<li>Tech Students</li>")
todoList.insertAdjacentHTML("beforebegin", "<li>Tech Students</li>")
todoList.insertAdjacentHTML("afterend", "<li>Tech Students</li>")
