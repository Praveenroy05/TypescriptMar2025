// Objects - Objects are collection of key-value pair inside the {}. {key : value}

// ClassName obj = new ClassName(parameter) - An object in Java

// 1. Literal Object  - JS/TS
// 2. Inline type Object  - TS
// 3. Using type aliases - TS
// 4. interface - TS
// 5. using class  - JS/TS
// 6. Constructor Function - JS/TS
// 7. Factory Function - JS/TS -  A function which return an object is known as a factory function


// 1. Using optinal parameter
// 2. readonly property


// 1. Literal object
// Syntax:
// let obj :{datatype}  = {key : value, function : Function}

let person = {
    null: "Javascript",
    age : 15,
    city: "NY",
    isEmployee : true,
    personinfo: function(){
        console.log(this.name, this.age, this.city, this.isEmployee)
    }
}

// 1. obj.key
// 2. obj["key"]

console.log("Line # 15",person.null);
console.log(person["null"]);
delete person.isEmployee
console.log("line 38", person.isEmployee);


// for in loop
for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

// person.personinfo("Example")
//person["personinfo"]()



// 2. Inline type object
// Syntax:
// let obj : {key : datatype} = {key : value}

let person1: { name: string, age: number, city: string, isEmployee: boolean}  =

{       name: "Javascript",
        age : 15,
        city: "NY",
        isEmployee : true,
}

person1.name = "Typescript"
//person.age1 = person.age







