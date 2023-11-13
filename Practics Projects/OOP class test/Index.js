const Contact = require("./Contact")
const Guardian = require("./Guardian")

const guardian = new Guardian(1, 'munna', 'student')
 

guardian.contact = new Contact('01234123213')
console.log(guardian)