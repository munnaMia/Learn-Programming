app.get("/", (req, res) => {
  console.log(req.query); // it will return a obj of quearry string like {cat: movie, type: under18, star:8} now link www.movie.com?cat=movie&type=under18&star=8
  //extract it

  let { cat, type, star } = req.query;
  res.send("<h1> Your are in home</h1>");
});
