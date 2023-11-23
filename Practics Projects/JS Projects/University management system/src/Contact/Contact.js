const _id = Symbol("id");
const _email = Symbol("email");
const _phone = Symbol("phone");
const _altPhone = Symbol("altPhone");
const _address = Symbol("address");

class Contact {
  constructor({ id, email, phone, altPhone, address }) {
    this[_id] = id;
    this[_email] = email || "";
    this[_phone] = phone || "";
    this[_altPhone] = altPhone || "";
    this[_address] = address || null;
  }

  get id(){
    return this[_id]
  }

  get email(){
    return this[_email]
  }

  set updateEmail(value){
    this[_email] = value
  }

  get phone(){
    return this[_phone]
  }

  set updatePhone(value){
    this[_phone] = value
  }

  get altPhone(){
    return this[_altPhone]
  }

  set updateAltPhone(value){
    this[_altPhone] = value
  }

  get address(){
    return this[_address]
  }

  set updateAddress(value){
    this[_address] = value
  }


  toString(){
    return `ID: ${this[_id]}, Email: ${this[_email]}, Phone: ${this[_phone]}, Alternative Phone: ${this[_altPhone]}, Address: ${this[_address]}`
  }
}

module.exports = Contact;
