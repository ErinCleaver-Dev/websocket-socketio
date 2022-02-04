// documentation for socket.io https://socket.io/docs/v4/
// getting started for socket.io https://socket.io/get-started/chat

const http = require('http')
// first you need to require the socket.io libary after installing it.
const socketio = require('socket.io');

// next you have to start up the server
const server = http.createServer((req, res) => {
    res.send("Connected to Server")
});

