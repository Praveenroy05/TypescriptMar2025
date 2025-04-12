//String

 // 2. string - combination of characters - this, javascript

    /*
    1. SingleQuote ('') - String Literal
    2. DoubleQuote (" ") - String Literal
    3. Backtick(``) - Template Literal // data driven testing for parameterisation of TCs
    */

    let sq = 'c'
    let dq : string= "JavaScript"
    let backtick1 : string= `TypeScript`

    let age1 = 10// ${age1}
    let info = `You are of age : ${age1}`
    console.log(info);


console.log("*************************************************************");

// 1. length - Return the number of characters that are available in string
// Syntax:
// stringName.length
// Example:
let str1 = "Hello World";
console.log(str1.length)

// 2. charAt(index) - It return the character at the specified index in an string
// Syntax:
// stringName.charAt(index)
// Example:
console.log(str1.charAt(105)); // ""

for(let i= 0; i<str1.length; i++){
    console.log(str1.charAt(i));
}

// 3. concat(string....) - joins 2 or more string and retrun a new string
// Syntax:
// stringName.concat(string....)
// Example:
console.log(str1.concat(" ", "JavaScript", " TypeScript"));
console.log(str1);

// 4. includes(searchString, position) - true or false
// Syntax:
// stringName.includes(searchString, position)
// Example:
//let str1 = "Hello World";

console.log(str1.includes("W")); // true
console.log(str1.includes("l", str1.indexOf("l"))); // true

// 5. startsWith(searchString) - Check if a string starts with the specified char or string and it return either true or false
// Syntax:
// stringName.startsWith(searchString)
// Example:
let str2 = "This is a string in Javascript and TypeScript"
console.log(str2.startsWith("is", 2)); // true

// 6. endsWith(searchString, pos?)
// Syntax:
// stringName.endsWith(searchString, pos)
// Example:
console.log(str2.endsWith("p", -2));

// 7. indexOf(string or character, position) - Retuns the index of first occurance of a specified value
// Syntax:
// stringName.indexOf(string or character, position)
// Example:
console.log(str2.indexOf("is", str2.indexOf("is")+1));
console.log(str2.indexOf("eewrwer"))

// 8 . lastIndexOf() -- array

// 9. replace(oldstring, newstring)
// Syntax:
// stringName.replace(oldstring, newstring)
// Example:
let str3 = "This is a string"
console.log(str3.replace("s", "P")); // This is a string in Python and TypeScript

console.log(str3.replaceAll("s", "P")); // This is a string in Python and TypeScript

// 10. slice(startIndex, endIndex)
// Syntax:
// stringName.slice(startIndex, endIndex)
// Example:
console.log(str2.slice(6, 2));

// 11. substring()
// Syntax:
// stringName.substring(startIndex, endIndex)
// Example:
console.log(str2.substring(6, 2));

// 12. toLowerCase() 
// Syntax:
// stringName.toLowerCase()
// Example:
console.log(str2.toLowerCase());

// 13. toUpperCase()
// Syntax:
// stringName.toUpperCase()
// Example:
console.log(str2.toUpperCase());

// 14. trim() - Removes the whitespace from beginning and end of a string
// Syntax:
// stringName.trim()
// Example:
let str4 = "   This is an string   "
console.log(str4.length);
console.log(str4.trim().length);

// 15. trimStart()
// Syntax:
// stringName.trimStart()
// Example:
console.log(str4.trimStart());
// 16. trimEnd()
// Syntax:
console.log(str4.trimEnd());

// 17. split()
// Syntax:
// stringName.split(separator)
// Example:
let str5 = "This is a test string";
console.log(str5.split("i"));

let str6 = "John"
console.log(str6.includes("h"));
console.log(str6.includes("h",0));

let str7= "this | is a , testing $strting for spliting example";
console.log(str7.split("|"));
console.log(str7.split(","));
console.log(str7.split("$"));
// output
// [ 'this is a testing strting for spliting example' ]
// [ 'this is a testing strting for spliting example' ]
// [ 'this is a testing strting for spliting example' ]
 


//18. join()
// Syntax:
// stringName.join(separator)
// Example:
console.log(str5.split(" ").join("-"))






