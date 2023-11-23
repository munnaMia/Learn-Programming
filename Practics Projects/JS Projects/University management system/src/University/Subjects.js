const _id = Symbol("id")
const _name = Symbol("name")
const _cradit = Symbol("cradit")

class Subject {
    constructor(id, name, cradit){
        this[_id] = id
        this[_name] = name
        this[_cradit] = cradit
    }

    get id(){
        return this[_id]
    }

    get name(){
        return this[_name]
    }

    set updateName(value){
        this[_name] = value
    }

    get cradit(){
        return this[_cradit]
    }

    set updatecradit(value){
        this[_cradit] = value
    }

    toString() {
        return `ID: ${this[_id]} Name: ${this[_name]} Cradit: ${this[_cradit]}`;
      }
}


module.exports = Subject