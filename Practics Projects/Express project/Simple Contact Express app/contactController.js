const contacts = require("./Contacts");

exports.getAllContact = (req, res) => {
    res.json(contacts.getAllContact()); // json method will converted the data into a json object before sending to an user
};

exports.createContact = (req, res) => {
    console.log(req.body); // the data user provide to the server will come a req.body we can check it .
    let { name, phone, email } = req.body;

    let contact = contacts.createContact({
        name,
        phone,
        email,
    });

    res.json(contact);
};

exports.getContactByID = (req, res) => {
    let { id } = req.params; // get the id from url
    id = parseInt(id);
    let contact = contacts.getContactByID(id);
    res.json(contact);
};

exports.updateContact = (req, res) => {
    let { id } = req.params; // get the id from url
    id = parseInt(id);

    let { name, phone, email } = req.body;

    let contact = contact.updateContactByID(id, {
        name,
        phone,
        email,
    });
    res.json(contact);
};

exports.deleteContact = (req, res) => {
    let { id } = req.params; // get the id from url
    id = parseInt(id);

    let contact = contacts.deleteContactByID(id);

    res.json(contact);
};
