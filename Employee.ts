// class - ES6 (ECMA SCRIPT 6 - 2015)
// Syntax:-

/*
class ClassName{

//properties
key1
key2
static key3

constructor(key1: type, key2:type){
    this.key1 = key1
    this.key2 = key2
}


info() :returntype{

}

static info1(){
}

}

// ClassName obj = new ClassName(parameter)

let obj = new ClassName(parameter)


*/



class Employee{

    // properties
    empId :number
    empName :string
    private empAge :number
    empSalary : number
    static cname = "ABCD"
    // constructor
    constructor(empId :number, empName :string, empAge :number, empSalary: number, name: string){
        this.empId = empId // this.empid = 1
        this.empName = empName
        this.empAge = empAge
        this.empSalary = empSalary
        this.name = name
    }

    employeeInformation(name) : void{
        console.log("Employee ID: ", this.empId);
        console.log("Employee Name: ", name);
        console.log("Employee Age: ", this.empAge);
        console.log("Employee Salary: ", this.empSalary);  
        console.log(Employee.cname);
    }

    static greetings(){
        console.log(`Welcome to ${Employee.cname} company`);
    }

}

const emp = new Employee(1, "John", 30, 10000, "Test")

console.log(emp.empId)
console.log(emp.empName)
//console.log(emp.empAge)
console.log(emp.empSalary)
console.log(Employee.cname) // 
emp.employeeInformation("Rahul")
Employee.greetings()
