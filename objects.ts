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

let person1: { name: string, age: number, city: string, isEmployee: boolean/*, greet: (name:string)=> string*/}  =

{       name: "Javascript",
        age : 15,
        city: "NY",
        isEmployee : true,
        //        greet : function(name : string){}
}

person1.name = "Typescript"
//person.age1 = person.age


// 3. type aliases
// Syntax:
// type variableName = {key:value} 

type human  = {
    name: string,
    age: number,
    city: string
}

let person2 : human = {name : "Rahul", age: 30, city : "Delhi"}
let person3 : human = {name : "John", age: 35, city : "Delhi"}

// 4. interface 
// Syntax:
// interface interfaceName {key : value}


interface human1 {
    name: string,
    age: number,
    city: string,
    salary : number
}

interface human1 {
    name: string,
    city: string,
    salary : number,
    greet : ()=> void
}

interface Employee extends human1{ role : String}



let person4 : human1 = {name : "Rahul", age: 30, city : "Delhi", salary : 10000, greet : function(){
    console.log("Hello")
}}


// class Employee1 implements Employee{


// }

// 6. Constructor Function
// Syntax:
/*
 function constructorFunctionName (parameter1 : type, parameter2 : type){
    this.parameter1 = parameter1
    this.parameter2 = parameter2 ....
}

const obj = new constructorFunctionName(param1, param2)
obj.parameter1
obj.parameter2


*/

function Car(make, model, year){
    this.make1 = make;
    this.model1 = model;
    this.year1 = year;
    this.noOfSeats = 5
    this.carInfo = function(){
        console.log("Make: " + this.make1 + ", Model: " + this.model1, ", Year: "+ this.year1)
    }
}

const car = new Car('BMW', 'i7', 2024)
console.log(car.make1)
console.log(car.model1)
console.log(car.year1)

car.carInfo()
console.log(car);

const car1 = new Car('Audi', 'Q7', 2025)
console.log(car1.make1)
console.log(car1.model1)
console.log(car1.year1)


// 7. Factory Function
// Syntax:
/*

function functionName(arg){
    // code ....
    return object
}

const obj = functionName(param)

*/

function PersonInfo(name, age, city){
    //.........
    return {
        name1: name,
        age1: age,
        city1: city
    }

}

const pinfo = PersonInfo("John", 24, "NY")
console.log(pinfo.name1)







