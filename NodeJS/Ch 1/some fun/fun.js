const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
    fs.readFile("./index.html", (err, data)=>{
        if(err){
            return console.log(err)
        }
        res.write(data)
        res.end()
    })
})


server.listen(3030, () => console.log("server start"))