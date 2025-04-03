// Function - {...}

// 1. Named function - Function Declaration
// 2. Anonymous function (unnamed function) - Function expression
    // a. Anonymous function
    // b. Arrow function (=>)

// 3. Constructor function
// 4. IIFE (Immediately Invoked Function Expression)
// 5. Factory function



// 1. Named function - Function Declaration
function add(a, b) :string {
    return a + b;
}

// 2. Anonymous function (unnamed function) - Function expression
    // a. Anonymous function
let multiply = function(a, b) {
    return a * b;
};

    // b. Arrow function
let divide = (a, b) => a/b

console.log(divide(10, 5))

