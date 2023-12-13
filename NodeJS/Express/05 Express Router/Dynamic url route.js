//Dynamic URL use case:
app.get("/products/:prodID", (req, res) => {
  console.log(req.params); //to get info about params it will return the :dataID as object like {prodID: 1}
  res.send("<h1> i am listen</h1>" + req.params.prodID);
});


app.get("/image/:imageID/review/:reviewID", (req, res) => {
  console.log(req.params); //to get info about params it will return the :dataID as object like {prodID: 1}
  res.send("<h1> i am listen</h1>" + req.params.imageID + req.params.reviewID);
});
