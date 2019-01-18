var http = require('http');

function startServer() {
    function onRequest(req, res) {
        console.log('request received!');
        res.writeHead(200, {'content-Type': 'text/plain'});
        res.write("Hello from our server module");
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server started on port:8888');
}
exports.startServer = startServer;
