const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
   const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
});

server.listen(3000,'localhost',()=>{
    console.log("Server listening");
});