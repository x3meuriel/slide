const http = require('http');
const data = {
    "name": "Ukwueji Uriel",
    "country": "Nigeria",
    "hobby": "Football"
}

const server = http.createServer((req, res)=>{

    res.end(`created a server succesfully  ${JSON.stringify(data)}`)
})


server.listen(4000);