const Employe = require("./Employee");

const _subject = Symbol("subject")

class Teacher extends Employe {
    constructor(id, name,employeId, subject){
        super(id, name, employeId)
        this[_subject] = subject;
    }

    get subject () {
        return this[_subject];
    }

    set updateSubject (subjectValue) {
        this[_subject] = subjectValue;
    }

    toString(){
        return `${super.toString()} Subject : ${this[_subject]}`
    }
}

module.exports = Teacher