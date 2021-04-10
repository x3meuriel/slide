const http = require('http');


const server = http.createServer((req, res)=>{

    res.end(`created a server succesfully`)
})


server.listen(4000);