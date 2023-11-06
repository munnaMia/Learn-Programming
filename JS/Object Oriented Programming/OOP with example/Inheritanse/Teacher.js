const Person = require("./Person");

//in this case teacher is junior or sub class and person is superclass or sinior class
class Teacher extends Person{
    // one thing that in Teacher class we dont have person properties inputs so what to do 
    constructor(name, email,age, subject, salary) {
      super(name, email, age) //super means superClass constractor.
      this._subject = subject;
      this._salary = salary;
    }
  
    get subject() {
      return this._subject;
    }
  
    get salary() {
      return this._salary;
    }
  }
  

module.exports = Teacher;
