const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor(){
        super();
    }
}

const myEmitter = new Sales();



myEmitter.on('newSale',()=>{
    console.log("There was a new sale");
});

myEmitter.on('newSale',()=>{
    console.log("Customer Name: John");
});

myEmitter.on('newSale',stock=>{
    console.log(`The total number of items in stock is ${stock}`);
});

myEmitter.emit('newSale',9);

const server = http.createServer();

server.on('request',(req,res)=>{
    console.log("Request is received");
    res.end('Request is received');
});

server.close('request',()=>{
    console.log("Server closed");
   
});

server.listen(3000,'localhost',()=>{
    console.log("Waiting for request...")
});
