// how to get the dimension of element
// height width

/*
    The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

    The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.   */


const sectionTodo = document.querySelector('.section-todo')
const info = sectionTodo.getBoundingClientRect()
const info = sectionTodo.getBoundingClientRect().height
const info = sectionTodo.getBoundingClientRect().width

console.log(info)
