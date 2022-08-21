// Some Mistake 

const user1 = {
    fName: "Alok",
    age: 20,
    about: function(){
        console.log(this.fName,this.age);
    }
}

//don't do this mistake

// user1.about();   //call about method
const myFun = user1.about;      // user1 t toka about to call ni kora .. nyFun variable t about method r reference to store korisu        
// reference store koruta this method r binding nohoi .so biinding koribola   .bind() method use koribo lagibo  

myFun(); //undefine undefine ahibo karn myFun t about method r reference ha store hbo so this method  to a window object hisapai takibo ..  user1 hoi natka .   


// currect way 
const user2 = {
    fName: "Alok",
    age: 20,
    about: function(){
        console.log(this.fName,this.age);
    }
}

const MyFun2 = user2.about.bind(user1);  //currect way
MyFun2();
