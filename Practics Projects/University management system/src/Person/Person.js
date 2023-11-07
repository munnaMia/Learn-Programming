const _id = Symbol('id');
const _name = Symbol('name');
const _blood = Symbol('blood');
const _contact = Symbol('contact');


class Person {
    constructor(id, name) {
        this[_id] = id;
        this[_name] = name;
        this[_blood] = null;
        this[_contact] = null;
    }

    get id() {
        return this[_id];
    }


    //Name
    get name() {
        return this[_name];
    }

    set updateName(nameValue){
        this[_name] = nameValue;
    }


    //Blood 
    get blood() {
        return this[_blood];
    }

    set updateBlood(bloodValue){
        this[_blood] = bloodValue;
    }


    //Contact
    get contact() {
        return this[_contact];
    }

    set updateContact(contactValue){
        this[_contact] = contactValue;
    }



    // toString method for person 
    toString(){
        return `${this[_id]} - ${this[_name]}`
    }
}




module.exports = Person; //exporting person class
