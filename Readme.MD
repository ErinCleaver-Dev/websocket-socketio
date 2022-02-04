Why use SocketIO over Websocket
*  socket io resolves issues with firewalls, av, and proxy lb where as web socktet dose not
*  if disconnected with ws you need to build a read connection.
*  data needs to be sent as 1's and 0's, dose not come out of the box
* needs to connect to /admin, /general, /pm
* with web socket you would need to make three connections.  
* older browsers cannot use websockets and users have not updated their browser 

With websocket you would have to build
  * Reconnect
  * Binary support
  * Added Multi-room support 
  * Deal with the blocker issue 
  * Socket io has all these things built in.  

Socket.io is built on Engine.io
  *  Under this is websocket and other options 