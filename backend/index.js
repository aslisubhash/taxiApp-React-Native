const { Socket } = require('dgram');

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;

io.on("connection", socket =>{
    console.log("User connected");
})



server.listen(port, () => {
  console.log('listening on *:3000');
});