let ws = new WebSocket('ws://localhost:8000/')
console.log(ws)

// another call back to the websocket is ws.onopen.
// useing an arrow function to do a process when the websocket opens 
ws.onopen = (event) => {
    // used to send a message back to the server uing websocket
    ws.send("I am so exited that I'm connected to the server")
}

// on the javascript side their is a onmessage property and a onpeoen property. 
// create a function
ws.onmessage = (event) => {
    // to check the event that occurs when getting a message from the server.  
    // to just get the data you do event.data
    console.log(event.data);
}