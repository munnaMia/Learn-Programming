const express = require("express");
const morgan = require("morgan");
const app = express();

/**
 * To learn route we will learn route which will be extracted from express .
 * the express is use route npm package to manage route
 *
 * 1. extract route from express.. like const route = express.Router()
 * 2. define routes useing route obj
 * 3. connect route obj with your app
 */

app.use(morgan("dev"));

//user routher start
const userRouter = express.Router(); // 1 task
userRouter.get("/login", (req, res) => {
  res.send("<h1> Your are in login page</h1>");
});
userRouter.get("/signin", (req, res) => {
  res.send("<h1> Your are in sign in page</h1>");
});
userRouter.get("/signup", (req, res) => {
  res.send("<h1> Your are in sign up page</h1>");
});
//user routher end

app.use("/user", userRouter); // in express each and every thing is a middleware so here we use userRouter as middleware to connect with our app  and when some one hit any router by /user it will work

app.get("/", (req, res) => {
  res.send("<h1> Your are in home</h1>");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is listen on PORT ${PORT}`);
});
