const express = require("express");
const morgan = require("morgan");

const app = express();

/**
 * To work with ejs we have to setup it
 * our express() provide a defalut template or view engine
 * first thing we have replace it with our ejs engine
 * how to do that using set() method
 */
app.set("view engine", "ejs"); // First task

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    /**
     * now here we will render in express give a method to render ejs so how to do that
     * simple res.render(here tell the file name and thats all because the views folder is default location for templates)
     */

    let testOBJ = {
        title : 'test title',
        body : 'test body',
        published : false
    }


    let testOBJ2 = [
        {name : 'munna0', age : 23},
        {name : 'munna1', age : 23},
        {name : 'munna2', age : 33},
        {name : 'munna3', age : 34},
        {name : 'munna4', age : 33},
        {name : 'munna5', age : 37},
        {name : 'munna6', age : 37},
    ]

    res.render('index', {title: 'this a title', post: testOBJ,  testOBJ2}) // we can pass value as object into ejs file to use as a variable
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNING ON PORT ${PORT}`);
});
