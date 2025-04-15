// let i = 10
//i = 20
// let i = [10, 20, 30] //  start with 0
// i  = [0:10, 1:20, 2:30 ....]
// i[index] // i[0] = 10
// There are 2 ways in which we can declare an array
// 1. Using array literal - []
// Syntax:
// In TS
// let arrayName : datatype[](optional) = [value1, value2, value3, ...]
// In JS
// let arrayName = [value1, value2, value3, ...]
var array = ["TS", 10, 20, 30, 40, "TS", true]; // - tuples
array = [34, 45, 67, 89, 23, 45, 678];
console.log(array);
var array0 = [];
console.log(array0);
array0[0] = 20;
array0[1] = 30;
array0[2] = 40;
console.log(array0);
console.log(array0[1]);
// 2. Array Constructor - new
var array1 = new Array(23, 557, "JS", "true_1", null, undefined);
var array2 = ["TS", "JS", "apple", , 50, 30, 30.67, "orange", "blue"]; //8 - //0 - 7
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);
console.log("***********************************************");
// length - 
// Syntax:
// arryaName.length
console.log(array2.length);
// for loop - 
for (var i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}
console.log("*********************");
// for ... of loop
// Syntax
/*
for(variable of arrayName){
// code
}

*/
for (var ele in array2) {
    console.log(array2[ele]);
}
var myTuple = ["TS", 20, "true"];
//

// let person = {
//     name1: "Javascript",
//     age : 15,
//     city: "NY",
//     isEmployee : true
// }

// // 1. obj.key
// // 2. obj["key"]

// console.log(person.name1);
// console.log(person[name1]);
