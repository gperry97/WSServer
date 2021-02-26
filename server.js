const WebSocket = require('ws');

const Port = 5000;

const WebServer = new WebSocket.Server({
    port: Port
});

WebServer.on('connection', function (socket){
    //console feedback
    console.log('A Client Just Connected!');

    //attach some behavior
    socket.on('message', function(msg){

        console.log('message recieved: ' + msg);
        //Broadcasting message to all clients
        WebServer.clients.forEach( function (client){
            client.send("Someone Said: " + msg);
        });
        //socket.send("Take this back! " + msg);
    });
});

console.log( (new Date() + "Server is listening on " + Port )); 
