//importing all the classes
const Person = require("./Person"); 
const Student = require("./Student");
const Teacher = require("./Teacher");

const person = new Person("Md Munna Mia", "mdmunna@mail.com", 23);
const teacher = new Teacher("Shamim khan","shamin@mail.com",23, "Mathematics", 23500);
const student = new Student("rahim", "rahim@mail.com", 21, ["bangla", "math", "physics"], 500); 

student.print