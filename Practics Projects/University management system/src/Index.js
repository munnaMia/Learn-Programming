// const Gurdian = require("./Person/Gurdian");
// There is another way to import if you index it
const { Guardian } = require("./Person");
const { Contact, Address } = require("./Contact");


// Guardian id 1 
const guardian01 = new Guardian(1, "Md Monsur Alam", "Businessmen", 30000);
guardian01.updateBlood = "o-";
guardian01.updateContact = new Contact({
  id: 1,
  email: "monsur@mail.com",
  phone: "012121212",
  altPhone: "4324234234",
});
guardian01.contact.updateAddress = new Address({
  id: 1,
  roadNo: 232,
  city: "cumila",
  region: "west",
  country: "bangladesh",
  postalCode: 23,
});
