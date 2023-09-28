const express = require('express');
const app = express();
const http = require('http');
const { get } = require('https');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const rooms = new Map();
const userName=new Map();

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("join", (info) => {
    if (!rooms.has(info.room)) {
      rooms.set(info.room, new Set());
    }
    socket.join(info.room);
    rooms.get(info.room).add(socket.id);
    userName.set(socket.id,info.name)

    console.log(`User ${socket.id} joined room ${info.room}`);
    console.log(socket.rooms);
    
  });

  socket.on("send", (msg) => {
    // Use socket.rooms as an array and exclude the socket's own ID
    const roomsArray = Array.from(socket.rooms).filter(room => room !== socket.id);

    if (roomsArray.length > 0) {
      const room = roomsArray[0]; // Assuming a socket is in only one room
      // console.log(`User ${socket.id} sent a message in room ${room}: ${msg}`);
      socket.to(room).emit("receive", {message:msg,name:userName.get(socket.id)});
    }
  });


  socket.on("disconnect", () => {
    const room = Object.keys(socket.rooms).find(room => room !== socket.id); // Get the room the user was in
    if (room) {
      console.log(`User ${socket.id} disconnected from room ${room}`);
      socket.leave(room);
      if (rooms.has(room)) {
        rooms.get(room).delete(socket.id);
        if (rooms.get(room).size === 0) {
          rooms.delete(room);
        }
      }
    }
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
