const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    //If name is required we can do this in this way
    name: {
        type: String,
        required: true,
        trim: true, //to cut white spaces
        minlength: 2,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        trim: true, //to cut white spaces
        minlength: 10,
        maxlength: 20,
    },
    phone: {
        type: String,
        required: true,
        trim: true, //to cut white spaces
        minlength: 10,
        maxlength: 14,
    },
});

// Create modal

// model name should be the file name and it always start with capital word
const Contact = model("Contact", contactSchema); // this will create a contact model

module.exports = Contact;