const Employe = require("./Employee");

const _subject = Symbol("subject")

class Teacher extends Employe {
    constructor(id, name, subject){
        super(id, name)
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