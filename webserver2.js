const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// web server --> use http module

/* http == http object --> has createServer function --> calls that function */

/* 
Same Code  */

// createServer --> makes serer --> retunrs ibject
let server = http.createServer(function (req, res) {});

// createServer called --> &.listen
// same
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* 
IP & PORT  
IP --> identifies computer --> address
PORT --> which server to use --> identification

make web server look for the port  
look at port 3000

accessing server 
one server can have many IP

how to choose which IP --> hostname

listen can take long --> run in cb async*/
