const express = require("express");
const morgan = require("morgan");
const userRouter = require("./router");
const app = express();

app.use(morgan("dev"));

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1> Your are in home</h1>");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is listen on PORT ${PORT}`);
});
