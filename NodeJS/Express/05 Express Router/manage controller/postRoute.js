const postRoute = require("express").Router();


//get post
postRoute.get("/", (req, res) => {
  res.send("<h1> render posts</h1>");
});

postRoute.get("/:prodID", (req, res) => {
  res.send("<h1> i am listen</h1>"+ req.params.prodID);
});


//do somthing with post
postRoute.post("/", (req, res) => {
  res.send("<h1> Create new post</h1>");
});

postRoute.put("/:postID", (req, res) => {
  res.send("<h1> update post</h1>");
});

postRoute.delete("/:postID", (req, res) => {
  res.send("<h1> delete post</h1>");
});



module.exports = postRoute;
