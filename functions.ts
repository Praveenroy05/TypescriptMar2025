// Function - {...}

// 1. Named function - Function Declaration
// 2. Anonymous function (unnamed function) - Function expression
    // a. Anonymous function
    // b. Arrow function (=>)

// 3. Constructor function
// 4. IIFE (Immediately Invoked Function Expression)
// 5. Factory function



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

    let divide1 = a => {
        console.log(a**2)
    }

    this
    
    divide1(10)


console.log(add1(10,30))

function add1(a, b) {
    return a + b;
}



