const postRoute = require("express").Router();

postRoute.get("/", (req, res) => {
  res.send("<h1> render posts</h1>");
});

postRoute.post("/", (req, res) => {
  res.send("<h1> Create new post</h1>");
});

postRoute.put("/", (req, res) => {
  res.send("<h1> update post</h1>");
});

postRoute.delete("/", (req, res) => {
  res.send("<h1> delete post</h1>");
});
module.exports = postRoute;
