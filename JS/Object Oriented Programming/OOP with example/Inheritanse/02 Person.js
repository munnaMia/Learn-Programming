class Person {
  constructor(name, email, age) {
    this._name = name;
    this._email = email;
    this._age = age;
  }

  get getName() {
    return this._name;
  }

  set setName(nameUpdate) {
    this._name = nameUpdate;
  }

  get getEmail() {
    return this._email;
  }

  set setEmail(emailUpdate) {
    this._email = emailUpdate;
  }

  get getAge() {
    return this._age;
  }

  set setAge(ageUpdate) {
    this._age = ageUpdate;
  }

  static isValid(age) {
    if (age <= 18) return "valid !";
    return "not Valid !";
  }

  get print() {
    console.log("Name :", this._name);
    console.log("Email :", this._email);
    console.log("Age :", this._age);
  }
}

module.exports = Person;
