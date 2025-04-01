// Loops - Which will execute the same block of code {...} multiple times.

console.log(1)
console.log(2)
console.log(3);
console.log(4);
console.log(5);

console.log("********************************");


for(let i =1 ; i<=5; i++){ // 1++ // 1+1 = 2++ = 2+1 // 5++ = 5+1
    if (i==3)
        console.log(i); // 1 2 3 4 5
    // break;
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
initialization - Initialize the varaible to start the execution. Ex;- let i = 0
condition - Condition to check whether the loop is to be executed or not. Ex:- i <=5
increment/decrement - Increment or decrement the variable after each execution. Ex:- i++ or i--

*/


// 2. while loop - 

