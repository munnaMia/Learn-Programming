const route = require("express").Router();
const {
    getAllContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact,
} = require("./routeController");

route.get("/", getAllContact);
route.get("/:id", getSingleContact);
route.post("/", createContact);
route.put("/:id", updateContact);
route.delete("/:id", deleteContact);

module.exports = route;
