const UniPerson = require("./UniPerson");

const _studentId = Symbol('studenetId');
const _guardian = Symbol('guardian')
const _exams = Symbol('exams')
const _fee = Symbol('fee')

class Student extends UniPerson {
    constructor(id, name, studentId, guardian){
        super(id, name)
        this[_studentId] = studentId;
        this[_guardian] = guardian;
        this[_exams] = []
        this[_fee] = null
    }

    get studentId(){
        return this[_studentId];
    }

    get guardian(){
        return this[_guardian]
    }

    get exams(){
        return this[_exams]
    }

    set updateExams(examsValue){
        this[_exams] = examsValue
    }

    addExam(exam){
        this[_exams].push(exam)
    }

    get fee(){
        return this[_fee]
    }

    set updateFee(feeValue){
        this[_fee] = feeValue
    }

    toString (){
        return `${super.toString()} Studnet ID : ${_studentId}`
    }
}


module.exports = Student;