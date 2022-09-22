//While loop

//print the number 0 to 9 
let i = 0;
while(i<=9) {
    console.log(i);
    i++;
}

console.log(`current value of i is ${i}`);
console.log("while loop");


//1st n natural number sum
let j = 0;
let sum = 0;

while (j<=10) {
  sum = sum + j;
    j++;
}
console.log(sum);


//do while loop 
let k = 50;
do{
    console.log(k);
    k++;
} while(k<=9);

console.log(`value of i is`, k);
console.log('do while loop');

//sum n natural number
let t = 0;
let sum4 = 0;

do{
    sum4 = sum4 + t;
    t++;
}while(t<=10);

console.log("sum of do-while loop",sum4);


//for loop

//print 0 to 9

for (let i = 0; i <= 9; i++) {
    console.log(i);
}
console.log("for loop");

// 1st n natural number sum
let sum1 = 0;
let num = 10;

for (let i = 1; i <= num ; i++) {
    sum1  = sum1 + i;
}

console.log(sum);


//break and continue keyword

for (let i = 0; i <= 10; i++) {
    if (i === 4) {
        break;
    }
    console.log(i); 
}
console.log(`break`);

for (let i = 0; i <= 10; i++) {
    if (i === 4) {
       continue;
    }
    console.log(i); 
}
console.log(`continue`);
