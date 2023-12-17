const router = require("express").Router(); // Extracting router from express...

const {
    getAllContact,
    createContact,
    getContactByID,
    updateContact,
    deleteContact,
} = require("./contactController");

router.get("/", getAllContact);
router.post("/", createContact);
router.get("/:id", getContactByID);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
