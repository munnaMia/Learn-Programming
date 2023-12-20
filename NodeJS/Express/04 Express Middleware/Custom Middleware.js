const express = require("express");

const app = express();


// every middle ware take 3 args 
function customMiddleWare(req, res, next){
  console.log("i am logged")
  next() // this next function just give instrunction to move next or if you dont call this sever will hang
}

app.use(customMiddleWare)

app.get("/", (req, res) =>{
  res.send("<h1>HOME</h1>")
  res.end()
})

app.get("/About", (req, res) =>{
  res.send("<h1>About</h1>")
  res.end()
})

app.get("/Help", (req, res) =>{
  res.json({
    contact : "01293982389",
    address : "comilla, bangladesh"
  })
  res.end()
})



app.listen(8080, () => {
  console.log("server is listen on PORT 8080");
});
