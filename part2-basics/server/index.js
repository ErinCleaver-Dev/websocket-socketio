// documenation on web socket https://github.com/websockets/ws/blob/master/doc/ws.md

// to call on web socket you need to require http web model
const http = require('http');

// to create a basic websocket in javascript you need to connect to the server.
const websocket = require('ws');

// then you would connect to the server
const server = http.createServer((req, res) => {
    res.end("Connected to Server")
});

// after this you create a new websocket and pass in the server object
// the websocket is watching for traffic on the server
const wss = new websocket.Server({server})

// msg is used to display a message in the server window
// then changed it to get a header message
wss.on('headers', (headers, req) => {
    console.log(headers)
})

// next is thing you would do is get the socket.
// ws stands for web socket 
// first console.log web socket.
wss.on('connection', (ws, req) => {
    // used the ws to send a message to the server
    ws.send("Welcome to websocket server")

    // on the server side you would use ws.on to listen to call backs from the websocket.
    ws.on('message', (msg) => {
        // displays the message form the user
        console.log(msg.toString())
    })
})

server.listen(8000)