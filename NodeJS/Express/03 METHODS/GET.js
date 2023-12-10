const express = require("express");
const app = express();
// in write of route we have to maintain a sequince and that is root route will always stay in botton in writng of code

app.get("/about", (req, res) => {
  res.send("<h1>About page</h2>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Home page</h2>");
});

app.get("/blog", (req, res) => {
  res.json({
    massage: "hello",
    form: 2323,
    ageCode: 43,
  });
});

app// so if a user want a access a route that doesnt exit how to handle that
.app
  .get("*", (req, res) => {
    res.send("<h1>404 not found</h2>");
  });

// so we have to create a route and have to get some data from server  to Do that:
app.get("/", (req, res) => {
  res.send("<p>Oh hello hi</p>");
}); //this is root path where if we hit the domain we will enter here

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running PORT: ${PORT}`);
});
