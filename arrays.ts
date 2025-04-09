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


let array : (number | string | boolean)[]= ["TS", 10,20,30,40, "TS", true] // - tuples

array = [34, 45, 67, 89, 23, 45, 678]
console.log(array);

let array0 :number[] = []
console.log(array0);
array0[0] = 20
array0[1] = 30 
array0[2] = 40
console.log(array0);
console.log(array0[1]);




// 2. Array Constructor - new

let array1 = new Array<any>(23, 557,  "JS", "true_1", null, undefined)


let array2 = ["TS", "JS", "apple", , 50, 30, 30.67, "orange", "blue"] //8 - //0 - 7

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
for(let i =0; i<array2.length ; i++){
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

for(let ele in array2){
    console.log(array2[ele]);
}

// let myTuple : [string, number, boolean] = [];

// myTuple.push("10")

console.log("**************************");

let myArray = [10,20,30, "TS", "JS", "apple", "blue", 50]
console.log(myArray);


//1. push(element..... ) - Add the elements to the end of an array
//Syntax:
// arrayName.push(element1, element2, element3,.....)
myArray.push("orange", 60, 40)
console.log("Push", myArray);

// 2. pop() - Remove the last element from the array
// Syntax:
// arrayName.pop()
console.log("Pop", myArray.pop()); // 40
console.log("Pop", myArray);

// 3. unshift(element....) - Add the element(s) to the beginning of an array
// Syntax:
// arrayName.unshift(element1, element2, element3,.....)
 console.log(myArray.unshift("red", 5))
 console.log("Unshift", myArray);

// 4. shift() - Remove the first element from the array
// Syntax:
// arrayName.shift()
console.log("Shift", myArray.shift());
console.log(myArray);

// 5. splice(startIndex, numberOfElementToDelete, ele1, ele2,......)
// Syntax:
// arrayName.splice(startIndex, numberOfElementToDelete, ele1, ele2,......)
// startIndex - The position where you want to add the element
// numberOfElementToDelete - The number of elements you want to delete from the array at the startIndex
// ele1, ele2,...... - The elements you want to add to the array at the startIndex

let myArray1 = [10,20,30,405,60,70]
myArray1.splice(2 ,"67", "xyz", "abc")
console.log(myArray1);

// 6. slice(startIndex, endIndex)

