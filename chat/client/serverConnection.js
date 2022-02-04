// to connect to a socket io server just using javascript
const socket = io('http://localhost:8000/')

// when testing see if it correctly connects to the server
socket.on("connect", (data) => {
    socket.on('welcome', (message)=> {
        console.log(message)
    })
    socket.emit("message", {data: "happy to meet you"})
})

