const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const Server  = require("socket.io");

const io = Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
var room_id;

io.on('connection', (socket) => {
  socket.on("join",(room)=>{
    socket.join(room);
    room_id=room;
    // console.log("room id",room_id)


  })
  console.log('a user connected');
  
  socket.on("send",(msg)=>{
   console.log(msg,"msg")
    socket.to(room_id).emit("receive",msg);
    // socket.broadcast.emit("receive",msg)
   

  })
 
  
  socket.on("disconnect",()=>{
    console.log("user disconnect")
  })
 
});

server.listen(3001, () => {
  console.log('listening on *:3000');
});