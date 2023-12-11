// Polymorphism has two main work :
    // method override and overloading(thats not posible in JS) 


class Person {
    constructor(name){
        this.name = name
    }

    // when we do a string concatanation with our class object on that time this "toString" method is call 
    toString() {
        return `Name: ${this.name}`
    }
}

const p1 = new Person("md munna mia");

console.log(p1 + "") //with toString : Person class without : object object
