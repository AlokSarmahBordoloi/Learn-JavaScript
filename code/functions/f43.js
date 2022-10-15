// functions inside function 

function app() {
    const myFuc = () => {
        console.log("hello from myFuc");
    }
    
    const addTwo = (num1,num2) => {
        return num1 + num2;
    }

    const multiplyTwo = (number1, number2) => number1 * number2;

    console.log("inside app");
    myFuc();
    console.log(addTwo(2,3));
    console.log(multiplyTwo(8,3));
}
app();
