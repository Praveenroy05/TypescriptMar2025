// Data Types - Which defines what kind of data a variable is storing

// 2 types of Data Types

// 1. Primitive Data Types - Only one value
    //1. number
    //2. string
    //3. boolean
    //4. null
    //5. undefined


    //6. any
    //7. union


    // 1. number - Represents both integers(67, -90) and floating point values(345.565435)
    // Syntax:-
    // keyword(let/const) variablename : datatype = value
    let age : number = 23

    let num = -123.45456547

    console.log(typeof num)

    // 2. string - combination of characters - this, javascript

    /*
    1. SingleQuote ('') - String Literal
    2. DoubleQuote (" ") - String Literal
    3. Backtick(``) - Template Literal // data driven testing for parameterisation of TCs
    */

    let singleQuote :string = 'JavaScript'
    let doubleQuote : string= "JavaScript"
    let backtick : string= `TypeScript`

    let name1 = "John"
            // ${name1}
    let greet = `Welcome ${name1}`

    console.log(greet)

    // 3. boolean - true/false
    let isAdmin : boolean = true
    let isNum : boolean = false

    // 4. null - intentional absence of a value
    let nullValue : null = null

    // 5. undefined - variable is declared but not assigned any value
    let undefinedValue : undefined 

    let num1
    console.log(num1);
    num1 = 67
    console.log(typeof num1);

    // Special Types - any, union

    // 6. any - any type of data can be assigned
    let anyValue : any = 123
    anyValue = "Hello"
    anyValue = true
    anyValue = null
    anyValue = undefined

    console.log(anyValue);

    // 7. union- allows a variable to hold multiple data types

    let unionValue : (string| number) = "Hello"
    unionValue = 123

    console.log(unionValue);
   

    






// 2. Non-Primitive Data Types - Objects
// Arrays
// Objects
// Functions