const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.end("welcome to our home page")
  }
  if(req.url === "/about"){
    res.end("welcome to our about page")
  }
  res.end(`
  <h1>Opps!</h1>
  <p>cant find the page called ${req.url}</p> `)

})

server.listen(5000)