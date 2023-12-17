class Contacts{
    constructor () {
        this.contacts = []
    }

    // Getting data 
    getAllContact(){
        return this.contacts
    }

    getContactByID(id){
        return this.contacts.find(contact => contact.id === id) // To get a single contact using find method
    }

    // Create Data 
    createContact(contact){
        contact.id = this.contacts.length +1 // this will create an id for contact object before pushing it into an array.
        this.contacts.push(contact)

        return contact // this is optional to return the given object.
    }

    // Update Data 
    updateContactByID(id, updateContact){ // here this method will take two params one for id another for update object
        let index = this.contacts.findIndex(contact => {contact.id === id}) // here find index  method return the index value of an item by using a callback function.

        //here is a trick we check if user give any name or value we will assing that if not previos value will assing
        this.contacts[index].name = updateContact.name || this.contacts.name 
        this.contacts[index].phone = updateContact.phone || this.contacts.phone
        this.contacts[index].email = updateContact.email || this.contacts.email

        return this.contacts[index] // return the update contact
    }

    // Delete data
    deleteContactByID(id){
        let index = this.contacts.findIndex(contact => {contact.id === id}) // here find index  method return the index value of an item by using a callback function.
        let deleteObj = this.contact[index]
        this.contacts = this.contacts.filter(contact => contact.id !== id) // delete the item in immutable way.
        return deleteObj
    }
}



module.exports = new Contacts()