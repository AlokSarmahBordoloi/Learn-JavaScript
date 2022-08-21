// call,apply,bind method


/*      call():   The call() method takes arguments separately . It can be used to invoke (call) a method with an owner object as an argument (parameter).With call(), an object can use a method belonging to another object.

    apply(): The apply() method is similar to the call() method . The apply() method takes arguments as an array.

    bind(): bind() method, an object can borrow a method from another object.     */


// call method

function hello(){
    console.log('hello world');
}
// hello();
hello.call();



//example1:
// const user1 = {
//     fName: "Alok",
//     age: 28,
//     about: function(hobby, favMusician){
//         console.log(this.fName,this.age, hobby, favMusician);       
//     }
// }
// const user2 = {
//     fName: "mohit",
//     age: 20,
// }

// user1.about.call(user2,'guitar','zubeen');         //user2 t about function nai so anibor baba .call() use kora hoisa . user1 t toka about fun t this method to ai25no line t user2 hoisa this holoni user2 karn fName,age aibur user2 r ha output t show koribo lagibo.


//ex1 toka ana ka u koribo pari
//another aprose

function about(hobby, favMusician){
    console.log(this.fName,this.age, hobby, favMusician);       
}

const user1 = {
    fName: "Alok",
    age: 28,
}
const user2 = {
    fName: "mohit",
    age: 20,
}

// about.call(user1,'guitar','zubeen');



// apply method
// about.apply(user1,['guitar','zubeen']);        //call = method



//  bind method
        // bind returns a function   manaa bind a bind a 1ta function return kora  (55 line t about kheni func t store korila)aru jatia amar dorkar pora tatia function to call koribo parim
const func = about.bind(user1, 'guitar','zubeen');
func();
