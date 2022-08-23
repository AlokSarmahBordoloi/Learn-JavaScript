                    // prototype 
// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

// Every function includes prototype object by default.

// The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.






function hello(){
    console.log('Hello world');
}

// const hello = { key1: "value1"};

// JavaScript function ===> function + object

console.log(hello.name);    //.name property : function ka nam dega 


//you can add your own properties
hello.myOwnProperty = "very unique value";   //add key value pair in hello() function
console.log(hello.myOwnProperty);


// name property ---> tells funcytion name;

// function provides more usefull properties.

// function provide free space . actual mei free sapace jesa kuch nahi hota free space mai empty object{} ko bol raha hai . 
//free sapce hoisa object {} hai object tua hoisa prototype 


console.log(hello.prototype); // {}        free sapace   hello function tur releted some key value pair add koribola hola ai prototype tut add koribo lagibo

    //  only function povide prototype property 

if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}


// prototype is simple object . function lgt free pua jai use koribo pari . 

hello.prototype.abc = "abcdoh"; //add property in prototype
hello.prototype.ram = "Ram 38347"; //add property in prototype
hello.prototype.ram2 = function(){
    return 'lalala';
}
console.log(hello.prototype.ram2());
