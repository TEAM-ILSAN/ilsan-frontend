import path from 'path';
import express, { Application } from 'express';
import { formatMessage, Message } from './utils/messages';
import { User, userJoin, getCurrentUser, userLeave, getRoomUsers } from './utils/users';

import { createServer } from 'http';
import { Server } from 'socket.io';

const app: Application = express();
const httpServer = createServer(app);

interface ServerToClientEvents {
  message: (message: Message) => void;
  roomUsers: ({ room, users }: { room: string; users: User[] }) => void;
}

interface ClientToServerEvents {
  message: (message: Message) => void;
  joinRoom: ({ username, room }: { username: string; room: string }) => void;
  chatMessage: (msg: string) => void;
}

interface InterServerEvents {
  // MEMO: mock data
  ping: () => void;
}

interface SocketData {
  // MEMO: mock data
  id: number;
  name: string;
  age: number;
}

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
  /* options */
});

// const server = http.createServer(app);
// const io = socketio(server);
const botName = 'ChatBot';

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connets
io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }: { username: string; room: string }) => {
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
    const user = getCurrentUser(socket.id);

    // Send message to client side
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  socket.on('disconnect', () => {
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
