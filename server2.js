const http = require('http');
const data = {
    "name": "Ukwueji Uriel",
    "country": "Nigeria",
    "hobby": "Football"
}

const server = http.createServer((req, res)=>{

    res.end(` ${JSON.stringify(data)}`)
})


server.listen(4001);