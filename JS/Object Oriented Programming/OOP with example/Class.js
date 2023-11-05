// One rule : class name will always start with capital letter like Person
// Secound rule : class is a template so working with class we have to create a instanse or object.
class Person {} 

// now we are creating an object 
const person1 = new Person();
person1.name = 'md munna'
person1.age = 23;

// console.log(person1)


const person2 = new Person();
person2.name = 'md munna'
person2.age = 33;

// console.log(person2)




// another way to create an object 
class User {
    name = 'md munna mia'
    age = 23

    //how to create a constractor
    constructor (){
        // console.log("calling")
    }
}
const p1 = new User(); //so see here User is present like a function so its mean that their is a function calling the behind which is constractor.
const p2 = new User();
// console.log(p1);
// console.log(p2);




// receving item using contractor parameeter
class Student {
    constructor(name, email){
        this.name = name
        this.email = email
    }
}

const s1 = new Student('munnamia' , '234234');
// console.log(s1)
