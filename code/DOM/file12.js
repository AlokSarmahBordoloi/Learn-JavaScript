// add new HTML elements to page

// innerHTML to add html element

const todoList = document.querySelector(".todo-list")
console.log(todoList.innerHTML)
todoList.innerHTML = todoList.innerHTML + "<li>Tech boy</li>" //add new innerHTML 




// when you should use it , when you should not

/* performance issue kora so innerHTML use kori add koribo nalaga 

 jodi html tag add koribo nalaga toka kheni a change koribo laga taatia use koribo pari */ 
