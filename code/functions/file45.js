// lexical scope 



const myVar = "value1";

function myApp(){
    // const myVar = "value1";

    function myFuc(){
        // const  myVar = "value77";
        const myFuc2 = () => {
        console.log("inside myFunc", myVar);

        }
        // console.log("inside myFunc", myVar);
        myFuc2();
    }

    console.log(myVar);
    myFuc();
}

myApp();
