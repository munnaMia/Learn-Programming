const express = require("express");

const app = express();
app.use(express.json()); // use this middle ware to receive the json data


//In memory
const book = [
  {
    id: 0,
    name: "book name 0",
    price: 600,
  },
  {
    id: 1,
    name: "book name 1",
    price: 6030,
  },
  {
    id: 2,
    name: "book name 3",
    price: 340,
  },
];

app.get("/About", (req, res) => {
  //to get quary params we have to use req.quary because when a uesr hit a quary like :: www.fb/home?show=all

  if (req.query.show === "all") {
    return res.json(book);
  } else {
    const result = book.filter((ele) => ele.price <= parseInt(req.query.price));
    return res.json(result); //passing data as json
  }
});

app.get("/", (req, res) => {
  res.write("<h1>ROOT</h1>");
  res.statusCode = 200;
  res.end();
});

//post method.
app.post("/About", (req, res) => {
  const newBook = req.body // here the user posted data received
  book.push(newBook)
  res.json(book)
});

app.listen(8080, () => {
  console.log("server is listen on PORT 8080");
});
