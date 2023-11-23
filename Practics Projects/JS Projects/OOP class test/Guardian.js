const Person = require("./Person")
class Guardian extends Person{
    constructor(id, name, profession){
        super(id, name)
        this.profession = profession
    }
}

module.exports = Guardian