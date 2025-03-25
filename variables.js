// Variables - Storage - Which stores either a single or multiple values
//int i =10;
// datatype variable = value
// 1. var - in Modern JS/TS we do not use this
// 2. let - Whenever we know that the values of the variable can be changed
// 3. const - Which is use to declare a constant variable - which cannot be changed
// Syntax 
// keyword(var/let/const) variablename : datatype(optional) = value
var i = "10";
i = "John";
var j = 10;
//j = 20
// local scope and global scope
// var 
// 1. scope  - Global or functional
// 2. Variable declared using a var keyword  can be redeclared and reinitialed as well
// 3. It is not mandatory to assign the value of the variable at the time of declaration
var a = 20; // Global
function test() {
    var b = 30; // local scope
    console.log(b);
    console.log(a);
}
//console.log(b);
test();
console.log(a);
var flag = "JS";
if (true) {
    var flag = "TS"; // local scope
}
console.log(flag); // JS -- TS 
//{...} - block of code
var c = 10;
var c = 50;
var c = 110;
var c = 200;
var c = 30065675765675675646464646765;
console.log(c);
//c = 50
var d;
console.log(d); // undefined
d = 10;
d = 50;
// ES5 - ECMA SCRIPT 5 - var
// ES 6 - let const
// let
// 1. scope  - Global or block scope {...}
// 2. Variable declared using a let keyword cannot be redeclared but can be reinitialed 
// 3. It is not mandatory to assign the value of the variable at the time of declaration 
var e = 10; // 
e = "Rahul";
console.log(e); // clg
var flag1 = "Python";
//let FLAG1 = "JS"
if (true) {
    //console.log(flag1);
    var flag1_1 = "TypeScript"; // local scope
    console.log("Line #84", flag1_1); //----
}
console.log("line #87", flag1); // 
var f;
f = "TS";
// const
// 1. scope  - Global or block scope {...}
// 2. Variable declared using a const keyword  cannot be redeclared and  cannot be reinitialed as well
// 3. It is mandatory to assign the value of the variable at the time of declaration 
var g = 45;
//g = 90
console.log(g);
// var 
// 1. scope  - Global or functional (function{})
// 2. Variable declared using a var keyword  can be redeclared and reinitialed as well
// 3. It is not mandatory to assign the value of the variable at the time of declaration
// let
// 1. scope  - Global or block scope {...}
// 2. Variable declared using a let keyword cannot be redeclared but can be reinitialed 
// 3. It is not mandatory to assign the value of the variable at the time of declaration 
// const
// 1. scope  - Global or block scope {...}
// 2. Variable declared using a const keyword  cannot be redeclared and  cannot be reinitialed as well
// 3. It is mandatory to assign the value of the variable at the time of declaration 
var h = 10;
if (true) {
    h = 45;
    console.log(h);
    // let h = 56
}
console.log(h);
var abc = 30;
abc = "TS";
console.log(abc);
