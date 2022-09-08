//  Iterate elements 


// array like object --->  indexing, length property 

/* loop :
     simple for loop 
     for of loop
     forEach method    (We can't use forEach method to iterate through HTMLCollection)      */



//  HTMLCollection :
let navItems = document.getElementsByTagName("a");   // HTMLCollection
console.log(navItems);

// using for loop :
for(let i = 0; i< navItems.length; i++){
    // console.log(navItems[i]);
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
    navItem.style.fontWeight = "bold"
}

// using for of loop :
for(let navItem of navItems){
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
    navItem.style.fontWeight = "bold"
}

// We can't use forEach method to iterate through HTMLCollection



/*   how to use forEach method in HTMLCollection ---> 
        (1st array la convert kori lobo lagibo HTMLCollection k tar pa forEach method use koribo parim) */

// HTMLCollection to Array :
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
    navItem.style.fontWeight = "bold"
});






// NodeList :   
let navItem2 = document.querySelectorAll("a"); // NodeList 
console.log(navItem2);

// for loop :
for(let i = 0; i< navItem2.length; i++){
    const navItem = navItem2[i];
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
    navItem.style.fontWeight = "bold"
}

// for of loop :
for(let navItem of navItem2){
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
    navItem.style.fontWeight = "bold"
}

// forEach method 
navItem2.forEach((navItem)=>{
        navItem.style.backgroundColor = "#fff"
        navItem.style.color = "green"
        navItem.style.fontWeight = "bold"
});



// change NodeList in Array :
navItem2 = Array.from(navItem2); //this line change nodelist to array
console.log(Array.isArray(navItem2));
