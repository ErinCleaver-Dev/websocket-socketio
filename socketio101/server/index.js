// documentation for socket.io https://socket.io/docs/v4/
// getting started for socket.io https://socket.io/get-started/chat




const http = require('http')
// first you need to require the socket.io libary after installing it.
const socketio = require('socket.io');


// next you have to start up the server using the http protocol
const server = http.createServer((req, res) => {
    res.end("Connected to Server")
});

// creating a new server connection from socket.io
const io = socketio(server, {
    cors: {
        origin: '*',
    },
});
// to stop cores errors


// next you establish the connection with socket io to the websocket
io.on('connection', (socket, req) => {
    // emit is used for sending messages to the server
    // need to pass in an event to emit
    socket.emit("welcome", "Connected to socket io Server!!")
    socket.on('chat message', (msg) => {
        console.log('welcome: ' + msg);
      });
})

server.listen(8000)