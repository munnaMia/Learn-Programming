// Static methods and propertise 

// Instanse of operator: 
// What is instanse of operator : it is used to find a object is a part of a class or not 

class Person {

    static className = "PERSON" // this is a static value not a dynamic value and we declare it by just adding static word

    //another exm of static
    static PI = 3.1416


    static isValid(age){
        return age >= 18
    }

    constructor(name, roll, age){
        this.name = name
        this.roll = roll
        this.age = age
    }

    get print(){
        console.log(`Name : ${this.name} Age : ${this.age} Email : ${this.roll}`)
    }
}

const p1 = new Person('Md munna mia', 19, 23);

// So lets check is p1 is instanceof of Person or not 

// console.log(p1 instanceof Person) //output : true

const p2 = {name: 'someName'}

// console.log(p2 instanceof Person) //output : false

console.log(p1.PI) //output : undifined it mean we cant get the access of PI using object.

// to access this kind of values we have to use class name directly 
// like 
console.log(Person.PI); 
console.log(Person.className);






// static methods 
const user = {
    name : 'md munna mia',
    age : 23
}
let p3 = null
p3 = Person.isValid(user.age) ? new Person(user.name, user.age, 23) : null;
console.log(p3)