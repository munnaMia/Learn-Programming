const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// To store data into mongo we have to create a mongoose.Schema first
let Schema = mongoose.Schema;

let testSchema = new Schema({
    name: String,
});

//Now to we have to create a model to communicate with database using model method the we have to provide a model name into that method

let Test = mongoose.model("Test", testSchema);

app.get("/", (req, res) => {
    let test = new Test({
        name: "md muna mia",
    });

    test.save()
        .then((t) => {
            res.json(t);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "server error",
            });
        });
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
