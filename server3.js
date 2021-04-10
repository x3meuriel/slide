const http = require('http');


const server = http.createServer((req, res)=>{

    res.end('<h1 style = "color: red"> Server successfully created by me </h1>')
})


server.listen(4005);