_name = Symbol("name");
_email = Symbol("email");

class Person {
  constructor(name, email) {
    this[_name] = name;
    this[_email] = email;
  }

  get print() {
    console.log(`Name : ${this[_name]} and Email : ${this[_email]}`);
  }
}

const p1 = new Person("munna mia", "mdjmunna.com");
p1.print;

// so in this case we cant acess name and email out of class file.

