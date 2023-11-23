const _id = Symbol("id");
const _name = Symbol("name");
const _passMark = Symbol("passMark");
const _subject = Symbol("subject");

class Exam {
  constructor(id, name, passMark, subject) {
    this[_id] = id;
    this[_name] = name;
    this[_passMark] = passMark || 33;
    this[_subject] = subject;
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

  get passMark() {
    return this[_passMark];
  }

  set updatePassMark(value) {
    this[_passMark] = value;
  }

  get subject() {
    return this[_subject];
  }

  set updatesubject(value) {
    this[_subject] = value;
  }

  toString() {
    return `ID: ${this[_id]} Name: ${this[_name]} PassMark: ${this[_passMark]} Subject: ${this[_subject]}`;
  }
}

module.exports = Exam;
