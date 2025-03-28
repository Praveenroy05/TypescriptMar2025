// Statements or conditions
// Statements in TS allows us to execute the different block {...} of code based on different  conditions.


// if statement
// if else statement
// if else if else statement
// nested if else statement
// switch statement

// if statement - If statement is used to execute the a block of code if the specified condition is true

// Syntax: -
/*

if(condition){
 // code
}

*/

if(10>11){
    console.log("10 is greater than 1"); 
}

// if else statement - 
// if else statement is used to execute the if block of code if the specified condition is true and
// else block of code if the specified condition is false.

// Syntax:- 

/*

if(condition){
    // code
} else {
    // code
}

 */

if(4>10){
    console.log("4 is greater than 1");
}
else{
    console.log("4 is not greater than 1");
}

// if else if statement
// Syntax:-

/*

if(condition1)
{
// code
} else if(condition2)
 {
 // code
 } else if (condition3)
  {
  // code
} 
  else{
  // code
 }

  */

 // Ranges
 // Data types are different
 // Logic Oprators

let browser  = "Opera"

if(browser === "chrome"){ // ("Opera" === "chrome")
    console.log("Browser is chrome");
}
else if(browser === "firefox"){
    console.log("Browser is firefox");
}
else if(browser === "Safari"){
    console.log("Browser is Safari");
}
else{
    console.log("Browser is not chrome,firefox or Safari");
}



// Switch statement
// Syntax:

/*
switch (expression) {
    case value:
        break;
    case value1:
        break;
    case value2:
        break;
    default:
        break;
}

*/


let browserName = "safari"
switch(browserName) { // switch("chrome"){.......}
    case "chrome":
        console.log("Browser is chrome");
        break;
    case "firefox":
        console.log("Browser is firefox");
        break;
    case "safari":
        console.log("Browser is safari");
        break;
    default :
        console.log("Browser is not chrome,firefox or safari");
        break;
}

//prompt()
/*
let num = 1
switch(num) { // switch("chrome"){.......}
    case 1:
        console.log("Browser is chrome");
        break;
    case "2":
        console.log("Browser is firefox");
        break;
    case "3":
        console.log("Browser is safari");
        break;
    default :
        console.log("Browser is not chrome,firefox or safari");
        break;
}
    */



    



