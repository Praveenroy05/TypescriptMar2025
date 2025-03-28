// 1. Arithmetic Op - 
// 2. Comparison Op -
// 3. Logical Op -
// 4. Assignment Op -

// Arithmetic op - 

// 1. Addition - (+) // 2+2
console.log(2+2);
console.log("TS" + "JS"); //TSJS

// 2. Subtraction - (-) // 10-9
// 3. Multiplication - (*)
// 4. Division - (/)
let num2 = 10
let num3 = 5

console.log(num2/num3)

// 5. Modulus - (%) - remainder after dividing the first number with 2nd num
console.log(num2 % num3) //- 10/5 - 2

// 6. Exponentiation - (num1 ** num2) - num1 ^num2
console.log(2**10) // 2^3 // 8

// 7. increment op - (++)

// 1. Post increment (x++) - First action will be performed and then the value will be incremented

let num4 = 10
console.log(num4++) // 10++ // 10 // 10++ = 10+1
console.log(num4)  // 11


// 2. pre-increment (++x) - First the value will be incremented and then the action will be performed
let num5 = 8
console.log(++num5) // ++8 // 8 // ++8 = 8+1
//console.log(num4)  // 11


// 8. decrement op - (--)

    // 1. Post decrement (x--) - First action will be performed and then the value will be decremented
    let num6 = 10
    console.log(num6--) // 10-- // 10 // 10-- = 10-1
    console.log(num6)  // 9
    // 2. pre-decrement (--x) - First the value will be decremented and the action will be perfored
    let num7 = 8
    console.log(--num7) // --8 // 8 // --8 = 8-1 = 7

    console.log("**************************************");

// 2. Comparison OPerator - Compares the two values and return the result as boolean (true or false)

    // 1. Equal to - (==) - checks if both values are equal
    // 2. Not Equal to - (!=) - checks if both values are not equal
    // 7. Strict Equality - (===)
    // 8. Strict Inequality - (!==) 

    // 3. Greater than - (>) - checks if the first value is greater than the second
    // 4. Less than - (<) - checks if the first value is less than the second
    // 5. Greater than or Equal to - (>=) - checks if the first value is
    // 6. Less than or Equal to - (<=) - checks if the first value is
     

    // What is diff b/w Equal to(==) and strict Equal to (===)

    // Equal to (==) - Compare if the 2 values are same or not without checking the datatype
    let num8 = 20
    let num9 = "20"
    console.log(num8 == num9);

    // Not Equal to (!=) 
    console.log(num8 != num9); // (20 != 20)

    // Strict Equality (===) - Compare if the 2 values are same or not along with the datatype should be same
    console.log("Strict inequality", num8 === num9); // (20 === 20)

    // Strict inEquality (!==)
    console.log("Strict inEquality", num8 !== num9); // (20 !== 20

    // Greater than (>)
    console.log(10 > 5); // true
    console.log(10 > 15); // false

    // Greater than or equal (>=)
    console.log(10 >= 10); // true
    console.log(10 >= 15); // false

    // Less than (<)
    console.log(10 < 15); // true
    console.log(10 < 5); // false

    // Less than equal to (<=)
    console.log(10 <= 10); // true
    console.log(10 <= 5); // false


    // Type annontation
    // Type Inference

    console.log("**************************************");

    // 3. Logical Op - Evaluates a boolean expression and return us a result as boolean (true or false)
    // 1. AND (&&) - checks if both conditions are true
    // 2. OR (||) - check if anyone of the condition is true or not
    // 3. NOT (!) - negate the boolean value (true to false and false to true)


    // 1. AND (&&)

    // true && true - true
    // true && false - false
    // false && true - false
    // false && false - false

    console.log((23>21) && (4>3))// true
    console.log((23>21) && (4<3)) // false
    console.log((23<21) && (4>3)) // false
    console.log((23<21) && (4<3)) // false

    // 2. OR (||)

    // true || true - true
    // true || false - true
    // false || true - true
    // false || false - false

    console.log("OR", (23>21) || (4>3)) // true
    console.log("OR",(23>21) || (4<3)) // true
    console.log("OR",(23<21) || (4>3)) // true
    console.log("OR",(23<21) || (4<3)) // false

    // 3. NOT (!)
    // !true - false
    // !false - true
    console.log("NOT",!(3>2)) // false
    console.log("NOT",!(0>1)) // true


    // 4. Assignment Op (=)
    // Assigns the value of the right operand to the left operand
    let var1 :number = 10


   
