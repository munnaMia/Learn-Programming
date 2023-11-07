const Person = requier("./Person.js");

const _department = Symbol('department');
const _account = Symbol('account');

class UniPerson extends Person {
    constructor(id, name){
        super(id, name)        
        this[_department] = null;
        this[_account] = null;
    }

    get department() {
        return this[_department];
    }

    set updateDepartment(departmentValue){
        this[_department] = departmentValue;
    }

    get account() {
        return this[_account];
    }

    set updateAccount(accountValue){
        this[_account] = accountValue;
    }


    toString(){
        super.toString()
        console.log(`Department = ${this[_department]} - Account + ${this[_account]}`)
    }
}

module.exports = UniPerson;