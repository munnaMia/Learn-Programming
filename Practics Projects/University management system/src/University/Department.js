const _id = Symbol("id");
const _name = Symbol("name");
const _dean = Symbol("dean");
const _teachers = Symbol("teachers");
const _subjects = Symbol("subject");

class Department {
  constructor({ id, name, subjects, dean, teachers }) {
    this[_id] = id;
    this[_dean] = dean || null;
    this[_teachers] = teachers || [];
    this[_name] = name;
    this[_subjects] = subjects || [];
  }

  get id() {
    return this[_id];
  }

  get name() {
    return this[_name];
  }

  set updateName(value) {
    this[_name] = value;
  }

  get subjects() {
    return this[_subjects];
  }

  set updatesubjects(value) {
    this[_subjects] = value;
  }

  get dean() {
    return this[_dean];
  }

  set updatedean(value) {
    this[_dean] = value;
  }

  get teachers() {
    return this[_teachers];
  }

  set updateteachers(value) {
    this[_teachers] = value;
  }

  addTeacher(teacher) {
    this[_teachers].push(teacher);
  }

  toString() {
    return `ID: ${this[_id]} Name: ${this[_name]}`;
    // Dean: ${this[_dean]} Subjects: ${this[_subjects]} Teachers: ${this[_teachers]}
  }
}

module.exports = Department;
