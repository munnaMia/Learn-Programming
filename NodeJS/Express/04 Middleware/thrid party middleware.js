const express = require("express");
const morgan = require("morgan")

const app = express();

// Using a thrid party middleware morgan. morger just log the req into terminal 
app.use(morgan('dev')) // Because we use morgan for only devlopment perpose.

app.listen(8080, () => {
  console.log("server is listen on PORT 8080");
});
