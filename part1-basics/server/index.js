// to call on web socket you need to require http web model
const http = require('http');

// to create a basic websocket in javascript you need to connect to the server.
const websocket = require('ws');

// then you would connect to the server
const server = http.createServer((req, res) => {
    res.end("Connected to Server")
});

// after this you create a new websocket and pass in the server object
const wss = websocket.Server({server})



server.listen(8000)