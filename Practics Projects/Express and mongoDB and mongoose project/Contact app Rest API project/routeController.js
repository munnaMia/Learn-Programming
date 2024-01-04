const Contact = require("./Contact");

exports.getAllContact = (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.json(contacts);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                massage: "error",
            });
        }); // It will fine the list of all data as array using this method
};

exports.getSingleContact = (req, res) => {
    let { id } = req.params;
    Contact.findById(id)
        .then((contact) => {
            res.json(contact);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                massage: "error",
            });
        });
};

exports.createContact = (req, res) => {
    let { name, email, phone } = req.body;
    let contact = new Contact({
        name,
        email,
        phone,
    });

    contact
        .save()
        .then((c) => {
            res.json(c);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                massage: "error",
            });
        });
};

exports.updateContact = (req, res) => {
    let { name, email, phone } = req.body;
    let { id } = req.params;

    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                //set refer update data
                name,
                email,
                phone,
            },
        },
        { new: true } // it will allow to return new update data or it will return old data
    )
        .then((updateContact) => {
            res.json(updateContact);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                massage: "error",
            });
        });
};

exports.deleteContact = (req, res) => {
    let { id } = req.params;

    Contact.findOneAndDelete({ _id: id })
        .then((contactDel) => {
            res.json(contactDel);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                massage: "error",
            });
        });
};
