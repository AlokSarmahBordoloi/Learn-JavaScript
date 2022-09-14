// static list vs live list


// querySelectorAll hamein static list degi   ,  querySelectorAll a noteList data hai
// getElementsBySomething hamein live list degi ,   getElementsBySomething HTMLCollection


// const listItems = document.querySelectorAll('.todo-list li')
const ul = document.querySelector('.todo-list')
const listItems = ul.getElementsByTagName('li')

const sixthLi =  document.createElement('li')
sixthLi.textContent = 'item 6'

// const ul = document.querySelector('.todo-list')
ul.append(sixthLi)
console.log(listItems)
