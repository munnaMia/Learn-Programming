const express = require("express");
const morgan = require("morgan");

const contactRoute = require("./contactRoute");

const app = express();
/**
 * if user send a data as from or json or as http req server will not accept that to accept the data,
 * we have to use some middle ware whice express will provied
 */
app.use(express.urlencoded({ extended: true })); // here extended true mean server will accppect from data at any cost.
app.use(express.json()); // to accept json data if user send data as json.

app.use(morgan("dev")); // use morgan as middle ware
app.use("/contacts", contactRoute);

// for default route
app.get("*", (req, res) => {
    res.send("<h1>Please use the correct route.</h1>");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNING ON PORT : ${PORT}`);
});
