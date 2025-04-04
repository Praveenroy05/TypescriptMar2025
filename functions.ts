// Function - {...}

// 1. Named function - Function Declaration
// 2. Anonymous function (unnamed function) - Function expression
    // a. Anonymous function
    // b. Arrow function (=>)

// 3. Function Constructor
// 4. IIFE (Immediately Invoked Function Expression)
// 5. Factory function - Object



// 1. Named function - Function Declaration
// Syntax:
/*

function functionName(param1:datatype, param2: datatype) : return datatype {
    // codes
}

const result = functionName(param1, param2)


*/

function add(a:string, b:string) :string {
    return a + b;
}

const addResult = add("Hello", "10")
console.log(addResult); // Output: HelloTS


function add2(a, b) {
    return a + b;
}

const add2Result = add2(10, 45)
console.log(add2Result); // Output: HelloTS



// 2. Anonymous function (unnamed function) - Function expression
    // a. Anonymous function
    // Syntax:
    /*
    const variable = function(parameters) : returntype{
            // code
        }

    variable(param)

    */
let multiply  = function(a:number, b:number) {
    return(a*b)
};


console.log(multiply(10,300))

    // b. Arrow function
    // Syntax:

    /*
    const variable = (parameters): returntype => {
        // code
    }
    variable(param)
    */
    let divide = (a, b) : number => a/b
    
    console.log(divide(10, 5))

    let divide1 =  (a:number): void=> {
        console.log(a**2)
    }

    
    divide1(10)


console.log(add1(10,30))

function add1(a, b) {
    return a + b;
}


// 3. Function Constructor
// Syntax:
// const obj = new Function('arg1', 'arg2', 'return arg1+arg2')

const obj = new Function('a', 'b', 'return a+b')
const result = obj(5,4)
console.log(result);

// 4. IIFE (Immediately Invoked Function Expression)

// Syntax:
/*
(function(parameters){
    // code
})
();

*/

(function(){
    console.log("Application is running successfully")
})();

(function(name){
    console.log(`${name} Server is running successfully`)
})("AWS");



// Optional parameter and Default parameter

function add3(a?,b?,c?){
    console.log(a+b) // undefined + undefined
    console.log(c); // undefined
}

add3(10,40,30)
add3(10,50)
add3()



function add4(name: string, age?: number){
    if(age !==undefined){
        return ("Name is :" +name+ " age is: " +age)
    }
        return ("Name is :"+ name)

}

console.log(add4("John", 30))
console.log(add4("John"))


function add5(name: string, age: number = 20 ){
   console.log("Name is : " + name + " age is : " + age);
}
add5("Rahul")


// Function Overloading
function hello(name: string) : string;
function hello(name: string, age: number) : string;

function hello(name: string, age?: number){
    if(age !==undefined){
        return ("Name is :" +name+ " age is: " +age)
    }
        return ("Name is :"+ name)
}

console.log(hello("Rahul"));
console.log(hello("Rahul", 10));








