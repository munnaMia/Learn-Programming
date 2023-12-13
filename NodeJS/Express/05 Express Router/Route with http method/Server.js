const express = require("express");
const morgan = require("morgan");
const userRouter = require("./router");
const postRoute = require('./postRoute')

const app = express();

app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/post",postRoute)


app.get("/", (req, res) => {
  res.send("<h1> Your are in home</h1>");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is listen on PORT ${PORT}`);
});
