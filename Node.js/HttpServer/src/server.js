const http = require('http');
const server = http.createServer( (req, res) => {
    res.end();
});
server.listen(4000, '127.0.0.1');