//  Traversing DOM Tree


//getRootNode() : The getRootNode() method returns the node object's root node, it optionally also includes the shadow root if it is available.

const rootNode = document.getRootNode()
console.log(rootNode)
console.log(rootNode.childNodes)

const htmlElementNode = rootNode.childNodes[0]
console.log(htmlElementNode)
console.dir(htmlElementNode)

// htmlElementNode  js r object hoi , object representation sabo hla console.dir korbo lagibo

console.dir(htmlElementNode.childNodes)  // display HTML child Nodes
// output: NodeList(3) [head,text,body]


// The parentNode property returns the parent node of an element or node.
 
// parentNode to childNodes la ana ka jbo pari :
// child relation :
const headElementNode =  htmlElementNode.childNodes[0]
const textElementNode =  htmlElementNode.childNodes[1]
const bodyElementNode =  htmlElementNode.childNodes[2]
console.log(headElementNode) 
console.log(textElementNode)
console.log(bodyElementNode)

// childNode to ParentNode :    
// parent relation :
console.log(headElementNode.parentNode);


// sibling relation :
console.log(headElementNode.nextSibling); //output: text
console.log(headElementNode.nextSibling.nextSibling); //output: body

// console.log(headElementNode.nextSibling.textContent); 

console.log(headElementNode.nextElementSibling); // nextElementSibling property : head r pesot toka direct element sibling debo .

 


// childes of head element
console.log(headElementNode.childNodes); // output: NodeList(5) [text, title, text, script, text]




// task :
// 1st select h1 then go h1 parent then  change background-Color & text color .
const h1 = document.querySelector("h1")
const div = h1.parentNode;
div.style.color = '#efefef'
div.style.backgroundColor = '#333'
 
// h1 to body
const body = h1.parentNode.parentNode
body.style.backgroundColor = 'green'




// directly select  koribo hola ana ka koribo lagibo :
const body1 = document.body
console.log(body1)




// head
const head2  = document.querySelector("head")
console.log(head2)
const tital = head2.querySelector("title")
console.log(tital)
console.log(tital.childNodes)



//  children property : It is used to return all the child elements of the specified element in the form of HTML collection.
const conatiner = document.querySelector(".container")
console.log(conatiner.children)
