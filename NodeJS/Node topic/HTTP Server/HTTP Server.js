const http = require("http")  //It will require all the http files and module and resources

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("<h1>Root Page</h1>");
        res.statusCode = 200 //This is return status code like 400,500
        res.end()
    }else{
        res.write("<h1>404 Page Not Found</h1>");
        res.statusCode = 200 //This is return status code like 400,500
        res.end() 
    }
})

server.listen(4000, ()=>{
    console.log("Server is listening PORT 4000")
})