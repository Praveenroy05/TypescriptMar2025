// Inheritance  - THis is a process in which one class access the properties and methods of the other class.

// method overriding:
// Definition
// A method in a superclass can be overridden by a method with the same name, return type,
// and parameter list in a subclass.

// Inheritance - 2 different classes  - Parent class and child class (extend the parent)

class Car{
    name
    color
    model
    constructor(name, color, model){
        this.name = name // this.name = "Audi"
        this.color = color 
        this.model = model
    }
    start(){
        console.log("Car started")
    }

    displayInformation(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`)
    }

    stop(){
        console.log("Car stopped")
    }


}

class Audi extends Car{
    year
    constructor(name, color, model, year){
        super(name, color, model)
        this.year = year
    }

    yom(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of Manufacture: ${this.year}`)
    }

    start(){
        console.log("Audi started")
    }




}


class Maruthi extends Car{
    year
    constructor(name, color, model, year){
        super(name, color, model)
        this.year = year
    }

    yom(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of Manufacture: ${this.year}`)
    }

    start(){
        console.log("Audi started")
    }


}

let audi = new Audi("Audi", "Red", "Q7", 2024)
console.log(audi.name)
audi.start()
audi.displayInformation()
audi.stop()

audi.yom()

let maruti  = new Maruthi("Maruthi", "Blue", "Suzuki", 2020)

//let maruti1  = audi
let maruti2  = new Maruthi("Maruthi", "Blue", "Suzuki", 2020)


let car :Car  = new Audi("Car", "pink", "abcd" , 2023)
car.displayInformation()
car.start()
car.yom()




