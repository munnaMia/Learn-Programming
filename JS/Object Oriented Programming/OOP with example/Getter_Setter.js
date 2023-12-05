class Person {
  constructor(name) {
    this._name = name;
  }

  //Normal method
  // getName(){
  //     return this._name
  // }

  // Getter method
  get name() {
    return this._name;
  }

  //Setter method to set data
  set setname(value) {
    this._name = value;
  }

  // setName(name){
  //     this._name = name
  // }
}

const p1 = new Person("rahim mia");

p1.setname = "not ok";
// using setter method
console.log(p1.name);
