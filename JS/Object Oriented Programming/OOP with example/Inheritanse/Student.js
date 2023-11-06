const Person = require("./Person")

class Student extends Person{
  constructor(name, email, age, subject, fee) {
    super(name, email, age)

    this._subject = subject;
    this._fee = fee;
  }

  get subject() {
    return this._subject;
  }

  get fee() {
    return this._fee;
  }

//   overRide print class because of it has already in Person
  get print(){
    super.print //in this case super is behave like Person class object
    console.log(this._subject +" and " + this.fee) //this will call the current class item if we want to call inherite class items so we have to focus on super 
  }
}


module.exports = Student;
