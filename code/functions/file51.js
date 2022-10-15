// function returning function 

function myFunc(){
    function hello(){
        // console.log("hello world");
        return "hello world";
    }
    return hello;
}

const ans = myFunc();
// ans();
console.log(ans());

// console.log(ans)




    direct return function (another method )
function myFunc(){
    return function(){
        return "hello world";
    }
}
