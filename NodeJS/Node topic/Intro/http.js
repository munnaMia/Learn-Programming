const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('<p>hlello some more text node js</p>')
})


server.listen(4341, ()=>{
    console.log('server is running')
})