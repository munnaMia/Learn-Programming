// every middle ware take 3 args 
function customMiddleWare(req, res, next){
    if(req.url === "/Help"){
      res.send("<h1>Sorry this page is bloced by admin</h1>")
    }
    next() // this next function just give instrunction to move next or if you dont call this sever will hang
  }