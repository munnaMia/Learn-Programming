const userRouter = require("express").Router();

userRouter.get("/login", (req, res) => {
  res.send("<h1> Your are in login page</h1>");
});
userRouter.get("/signin", (req, res) => {
  res.send("<h1> Your are in sign in page</h1>");
});
userRouter.get("/signup", (req, res) => {
  res.send("<h1> Your are in sign up page</h1>");
});


module.exports = userRouter