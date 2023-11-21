const express = require("express");

// express -> is function which we can use to create an application
// Create a express server :
// =========================

// first create a variable which will handle out application
const app = express(); //create a application server

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running and PORT : ${PORT}`)
}) 

/**
 * 
> expressjs@1.0.0 start
> node app.js

Server is running and PORT : 8080

 */

/*
process.env.PORT what is this :
if in our system already have a port then it will take that port Number
try by giving a comman in linux terminal : export PORT=3030 and run the 
project again
*/