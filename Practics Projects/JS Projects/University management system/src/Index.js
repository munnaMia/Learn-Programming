// const Gurdian = require("./Person/Gurdian");
// There is another way to import if you index it
const { Guardian, Student, Teacher } = require("./Person/index");
const { Contact, Address } = require("./Contact/index");
const { Department, Subject, Exam } = require("./University/Index");

// Guardian id 1
const guardian01 = new Guardian(1, "Md Monsur Alam", "Businessmen", 30000);
guardian01.updateBlood = "o-";
guardian01.updateContact = new Contact({
  id: 1,
  email: "monsur@mail.com",
  phone: "012121212",
  altPhone: "4324234234",
});
guardian01.contact.updateAddress = new Address({
  id: 1,
  roadNo: 232,
  city: "cumila",
  region: "west",
  country: "bangladesh",
  postalCode: 23,
});

//Student ID 01
const student01 = new Student(1, "Md Munna Mia", "STID01", guardian01);
student01.updateBlood = "o+";
student01.updateContact = new Contact({
  id: 1,
  email: "munna@mail.com",
  phone: "1231232",
  altPhone: guardian01.contact.phone,
  address: guardian01.contact.address,
});

//Department 01

const department01 = new Department({
  id: 1,
  name: "software",
});
student01.updateDepartment = department01;

department01.updateSubjects = [
  new Subject("SWT01", "Principles of Software", 2),
  new Subject("SWT02", "Principles of Desing", 3),
  new Subject("SWT03", "Principles of Web", 1),
  new Subject("SWT04", "Principles of HTTP", 2),
];

// Finding total cradit of a student
// console.log(
//   student01.department.Subjects.reduce((acu, cur) => {
//     acu += cur.cradit
//     return acu
//   }, 0)
// );

// Teacher

const dean01 = new Teacher(1, "Asik hossain",23, "Principle of software");
department01.updateDean = dean01;
dean01.updateBlood = "o+";
dean01.updateContact = new Contact({
  id: 1,
  email: "Asik@mail.com",
  phone: "01212sd1212",
  altPhone: "432423sdf4234",
});
dean01.updateAddress = new Address({
  id: 1,
  roadNo: 232,
  city: "cumila",
  region: "west",
  country: "bangladesh",
  postalCode: 23,
});
dean01.updateSalary = 70433
dean01.updateDepartment = department01


const teacher01 = new Teacher(2, 'manik molla', 'Principle of web')
teacher01.updateBlood = "o+";
teacher01.updateContact = new Contact({
  id: 13,
  email: "Asik@mail.com",
  phone: "01212sd1212",
  altPhone: "432423sdf4234",
});
teacher01.updateAddress = new Address({
  id: 13,
  roadNo: 232,
  city: "cumila",
  region: "west",
  country: "bangladesh",
  postalCode: 23,
});
teacher01.updateDepartment = department01
teacher01.updateSalary = 50000

const teacher02 = new Teacher(3, 'akbor molla', 'Principle of HTTP')
teacher02.updateBlood = "o+";
teacher02.updateContact = new Contact({
  id: 12,
  email: "Asik@mail.com",
  phone: "01212sd1212",
  altPhone: "432423sdf4234",
});
teacher02.updateAddress = new Address({
  id: 12,
  roadNo: 232,
  city: "cumila",
  region: "west",
  country: "bangladesh",
  postalCode: 23,
});
teacher02.updateDepartment = department01
teacher02.updateSalary = 50000


department01.addTeacher = dean01
department01.addTeacher = teacher01
department01.addTeacher = teacher02
console.log(student01)