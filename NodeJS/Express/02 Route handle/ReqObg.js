const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/about", (req, res) => {
  res.send("<h1>About page</h2>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Home page</h2>");
});

app.get("/blog", (req, res) => {
  res.send("<h1>Blog page</h2>");
});



app.get("/", (req, res) => {
  res.send("<p>Oh hello hi</p>");
});

app.get("*", (req, res) => {
    res.send("<h1>404 not found</h2>");
  });

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
