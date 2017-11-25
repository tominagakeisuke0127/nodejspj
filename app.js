//include
var http = require('http');
var fs = require('fs');

//Global Variables
var entryPage = null;
fs.readFile('./client/index.html', 'utf-8', function (err, data) {
    if(!err){
      entryPage = data;
    }
});

//server
var server = http.createServer();
server.on('request', doRequest);
server.listen(3000, process.env.IP);
console.log('Server running!');

function doRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(entryPage);
    res.end();
}
