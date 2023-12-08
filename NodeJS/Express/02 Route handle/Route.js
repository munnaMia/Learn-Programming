
app.get("/About", (req, res) => {
    res.write("<h1>About</h1>");
    res.statusCode = 200;
    res.end();
  });
  
  
  
  app.get("/", (req, res) => {
    res.write("<h1>ROOT</h1>");
    res.statusCode = 200;
    res.end();
  });
  