// Loops - Which will execute the same block of code {...} multiple times.

console.log(1)
console.log(2)
console.log(3);
console.log(4);
console.log(5);

console.log("********************************");


for(let i =1 ; i<=5; i++){ // 1++ // 1+1 = 2++ = 2+1 // 5++ = 5+1
    if (i==3){
        console.log(i); // 1 2 3 4 5
        break;    
    }
}

// 1. for loop 
   // a. for loop - Traditional loop - If we know how many times we have to run the iteration
   // b. for...in loop - Loop through object properties - {name : "Rahul"}
   // c. for...of loop - Loop used to iterate over iteratable object . Array - [1,2,3,4], String etc etc

// 2. while loop - If we do not know how many times we have to run the iteration
// 3. do...while loop - If we want to exectue the loop atleast one time before checking the condition.

console.log("************For loop********************");

// 1. for loop - 
// Syntax:

/*

for(initialization; condition; increment/decrement)
{
    // code to be executed
   // break;
}
initialization - Initialize the variable to start the execution. Ex;- let i = 0
condition - Condition to check whether the loop is to be executed or not. Ex:- i <=5
increment/decrement - Increment or decrement the variable after each execution. Ex:- i++ or i--

*/

for(let i =1 ;i<=10 ; i++){ // 1++ // 1+1 = 2++ = 2+1 // 5++ = 5+1
   console.log(i); // 1 2 3 4 5
 
}

console.log("*****************");
// 2. while loop - 
// Syntax:

/*

initialization;

while(condition){
    // code to be executed
increment/decrement
}

*/

// 10...1
let i = 10;
while(i>=1){ //  10>=1
    console.log(i); // 10 9 8 7 6
    i--; //6-- 5
    if(i==5){
        break;
    }
}

console.log("*****************");
// 3. do while loop - 
// Syntax:

/*

initialization;

do
{
    // code to be executed
increment/decrement
}while(condition);

*/

let j = 1;
do{
    console.log(j); 
    j++;
}while(j<=0);




let k =1
while(k<=0){
    console.log(k); // 1 2 3 4 5
    k++ // 6
}

