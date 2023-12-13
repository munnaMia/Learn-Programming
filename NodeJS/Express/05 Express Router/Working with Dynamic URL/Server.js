const express = require("express");
const morgan = require("morgan");
const userRouter = require("./router");
const postRoute = require('./postRoute')

const app = express();

app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/post",postRoute)

// //Dynamic URL use case:
// app.get("/products/:prodID", (req, res) => {
//   console.log(req.params) //to get info about params it will return the :dataID as object like {prodID: 1}
//   res.send("<h1> i am listen</h1>"+ req.params.prodID);
// });

app.get("/", (req, res) => {
  res.send("<h1> Your are in home</h1>");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is listen on PORT ${PORT}`);
});
