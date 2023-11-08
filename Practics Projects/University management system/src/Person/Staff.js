const Employe = require("./Employee");

const _title = Symbol("title")

class Staff extends Employe {
    constructor(id, name, title){
        super(id, name)
        this[_title] = title;
    }

    get title () {
        return this[_title];
    }

    set updateTitle (titleValue) {
        this[_title] = titleValue;
    }

    toString(){
        return `${super.toString()} Title : ${this[_title]}`
    }
}

module.exports = Staff