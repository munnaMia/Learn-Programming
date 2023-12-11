class Person {
  constructor(name) {
    //in javascript doesn't have a access modifiers features so we can't use private and public properties
    //So what we can do we can give a underscore that will help developer to understand that it is a private method.
    this._name = name; //private variable

    // in that type of cases we can't access variable directly so what we can to we have to use getter setter so how to do that
  }

  getName() {
    // access the variable using a method
    return this._name;
  }
  setName(name) {
    this._name = name;
  }

  sendMail(msg) {
    console.log("MSG: ", this._senitizeMail(msg));
  }

  //Private methods
  _senitizeMail(msg) {
    return msg.toLowerCase();
  }
}

const p1 = new Person("hello");
console.log(p1.getName());
p1.setName("oki");
console.log(p1.getName());
p1.sendMail("Hllo how are  you");
