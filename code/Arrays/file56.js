// short method 

//  ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125



//sort 

 //2,5,87,33,41
 //2,5,33,41,87

 const numbers = [2,7,800,1200,300];
 //["2","7",......"300"]
// [50,55,49,56,49,51]

 // '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

//ascii value sai sort hoisa
const userNames = ['absd','mohit','Alok','SS','nitin','harshit'];
 userNames.sort();
 console.log(userNames);


//example:
 const numbers2 = [78,3,6,900,300];
//  numbers2.sort((a,b)=>{
//     return a-b; //ascending order
        // return b-a; //desending order
//  });
numbers2.sort((a,b)=> a-b);
 console.log(numbers2);

    //how to do 
    //a-b ---> postive (greather than 0) ---> b,a 
    //900,300 ---> 790  so  300,900(b,a)

    //a-b ---> negative ---> a,b
    //3,6 ---> -3 so 3,6 (a,b)



//price lowToHigh highToLow
const products = [
    {productId:1, productName: "p1", price: 300},
    {productId:2, productName: "p2", price: 8000},
    {productId:3, productName: "p3", price: 3000},
    {productId:4, productName: "p4", price: 1300},
    {productId:5, productName: "p5", price: 3300},
    {productId:6, productName: "p6", price: 200}
]

// lowtohigh
const lowToHigh = products.slice(0).sort((a,b)=> {
    return a.price - b.price;
});
console.log(lowToHigh);

//hightolow
const highToLow = products.slice(0).sort((a,b)=> {
    return b.price - a.price;
});
console.log(highToLow);


