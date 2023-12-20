const express = require("express");

const app = express();

function customMiddleWare(req, res, next){
  if(req.url === "/Help"){
    res.send("<h1>Sorry this page is bloced by admin</h1>")
  }
  next() 
}

function miniLogger(){
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
  }
}

// when we have multiple middleware we can store tham into array 
const middlewares = [customMiddleWare, miniLogger()]

app.use(middlewares) //handle multiple middleware at a time


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
