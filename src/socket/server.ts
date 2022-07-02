// const path = require('path');
// const express, { Application } = require('express')
import path from 'path';
import express, { Application } from 'express';
import { formatMessage } from './utils/messages';
import { userJoin, getCurrentUser, userLeave, getRoomUsers } from './utils/users';
import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData } from './types';

import { createServer } from 'http';
import { Server } from 'socket.io';

const app: Application = express();
const httpServer = createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

const botName = 'ChatBot';

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connets
io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username = '', room = '' }: { username: string; room: string }) => {
    console.log('server joinRoom --');
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);

    socket.emit('message', formatMessage(botName, 'Welcome to chatcord!'));

    // Broadcast when a user connects
    socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${username} has joined the chat`));

    // Emit Updated users after join
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chat message
  socket.on('chatMessage', (msg: string) => {
    console.log('server chatMessage --');
    const user = getCurrentUser(socket.id);
    // Send message to client side
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  socket.on('disconnect', () => {
    console.log('server disconnect --');
    const user = userLeave(socket.id);
    if (user) {
      io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));

      // Emit Updated users after leave
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = 3000 || process.env.PORT;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}... `));
