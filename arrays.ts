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

// 6. slice(startIndex, endIndex) - return the portion of an array
// Syntax:
// arrayName.slice(startIndex?, endIndex?)
// startIndex - The position where you want to start the slice
// endIndex(Exclusive) - The position where you want to end the slice

let myArray2 = ["TS", "a", "b", "c", "d", 10, 30, 40]
console.log("Slice() ", myArray2.slice())
console.log("Slice() ", myArray2.slice(3))
console.log("Slice() ", myArray2.slice(2, 5)) // 2 3 4
//console.log("Slice() ", myArray2.slice(-1, -3)) // -3 -2
let arrResult = myArray2.slice(2, 5)
console.log(arrResult);

let arr2 :any[] = []
//arr2 = myArray.slice(2,5)
//console.log(arr2);
arr2 = arr2.concat(myArray.slice(2,5))
console.log(arr2);

// 7. toString()
// Syntax:
// arrayName.toString()
console.log(myArray2.toString());

// 8. concat()
// Syntax:
// arrayName.concat(arrayName1, arrayName2, arrayName3,.....)
console.log(myArray2.concat([1,2,3,4,5,6,7]))
console.log(myArray2);

// 9. indexOf(element)
// Syntax:
// arrayName.indexOf(element)

// let myArray2 = ["TS", "a", "b", "c", "d", 10, 30, , "40", 40]

console.log(myArray2.indexOf(40));

// 10. lastIndexOf(element)
// Syntax:
// arrayName.lastIndexOf(element)
console.log(myArray2.lastIndexOf("d"));

// forEach(fun), map(fun), filter(fun), reduce(fun), some(fun), every(fun)

let myArray3 = [1,2,3,4,5,"TS", "JS", "blue"]

// 11. forEach(function)
// Syntax:
// arrayName.forEach(function(element, index, arrayName){....})
// element - The current element being processed in the array.
// index(optional) - The index of the current element being processed in the array.
// arrayName(optional) - The array object itself.

myArray3.forEach(function(ele, index, t){
    console.log(ele, index, t)
    if(ele == 4){
        t.pop()
    }
})
console.log(myArray3);

// 12. map(function) - Creates a new array with the result of calling the function on every element of an array
// Return the array with exactly the same number of element whatever we have in the orignal array
// Syntax:
// arrayName.map(function(element, index, arrayName){....})

let myArray4 = [100,200,300,400,500]
let er = 86
const inr = myArray4. map(function(element){
    return element * er
})
console.log(inr);

// 13. filter(function) - Create a new array with all the elements that passes the function
// Either have the exactly same number of element or less than
// Syntax:
// arrayName.filter(function(element, index, arrayName){....})

const users = [
    { name: 'John', active: true },
    { name: 'Jane', active: false },
    { name: 'Alice', active: true },
]
let activeUser = users.filter(function(element){
    return element.active
})
console.log(activeUser);

// 14. reduce(function, initialValue(optional)) - Function will apply on every element of an array and return the result as a single value
// Syntax:
// arrayName.reduce(function(accumlator, currentValue, index, array){...}, initialValue)
// accumulator - The accumulated value that we get from the previous iteration
// currentValue - The current element being processed in the array.
// index - The index of the current element being processed in the array.
// array - The array object itself.


let myArray5 = [12,45,67,3423,34,67]

let sum=0
for(let i=0; i<myArray5.length; i++){
    sum = sum+ myArray5[i] // sum = 0+12 = 12, sum = 12+45
}
console.log(sum);

let reduce = myArray5.reduce(function(sum, num){
    return sum * num
})
console.log(reduce);


let strArray = ["This", "Is", "JS"]
let str = strArray.reduce(function(acc, word){
    return acc + " " +word
})
console.log(str);


// 15. some(function) - Check whether at least 1 element in the array passes the function then it will retun true else false
// Syntax:
// arrayName.some(function(element, index, array){...})
let numbers = [1, 2, 3, 5, 5, 7]
let isEven = numbers.some(function(num){
    return num % 2 == 0
    })
    console.log(isEven); 


//16. every(function) - Check whether at all the elements in the array passes the function then it will retun true else false
// Syntax:
// arrayName.every(function(element, index, array){...})
let number = [1, 1, 3, 5, 5, 7]
let isOdd = number.every(function(num){
    return num % 2 != 0
})
console.log(isOdd);




