const UniPerson = require('./UniPerson');

const _employeId = Symbol('employeID');
const _salary = Symbol('salary')

class Employee extends UniPerson{
    constructor(id, name, employeId, salary){
        super(id, name)
        this[_employeId] = employeId;
        this[_salary] = salary
    }

    get employeId(){
        return this[_employeId];
    }

    get salary(){
        return this[_salary]
    }

    set updateSalary(salaryValue){
        this[_salary] = salaryValue
    }

    toString(){
        super.toString()
        console.log(`EmpolyeeID : ${this[_employeId]}, Salary : ${this[_salary]}`)
    }
}

module.exports = Employee;