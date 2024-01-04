const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const route = require("./route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/contact", route);

app.get("/", (req, res) => {
    res.send("Root page <h2>/contact</h2> work page");
});

const PORT = 8080;
const mongodbURL = `mongodb+srv://munnaMia:munna-987@cluster0.esvdnr0.mongodb.net/TestDatabase?retryWrites=true&w=majority`;
mongoose
    .connect(mongodbURL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNING ON PORT ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
