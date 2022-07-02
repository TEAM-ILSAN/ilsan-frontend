// import { io, Socket } from 'socket.io-client';
// import { ServerToClientEvents, ClientToServerEvents } from './types';
// import { Message } from './utils/messages';
// import { User } from './utils/users';

// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

// const chatMessages = document.querySelector('.chat-messages');

// GET username from URL
// const { username, room } = Qs.parse(location.search, {
//   ignoreQueryPrefix: true,
// });

// TODO: Get user name from URL using Qs or other feature
// const zzz = window.location.pathname;

// const username = 'testuser';
// const room = 'testRoom';

// Join chatroom
// socket.emit('joinRoom', { username, room });

// Get message from server
// socket.on('message', (message) => {
//   console.log('main message--');
//   outputMessage(message);

//   chatMessages.scrollTop = chatMessages.scrollHeight;
// });

// socket.on('roomUsers', ({ room, users }) => {
//   console.log('main roomUsers--');
//   outputRoomUsers(users);
// });

// Output message to DOM
// function outputMessage({ username, text, time }: Message) {
//   const div = document.createElement('div');
//   div.classList.add('message');
//   div.innerHTML = `	<p class="meta">${username}<span>${time}</span></p>
//   <p class="text">
//     ${text}
//   </p>`;
//   document.querySelector('.chat-messages').appendChild(div);
// }

// function outputRoomUsers(users: User[]) {
//   const userList = document.getElementById('users');
//   userList.innerHTML = `${users.map((user: User) => `<li>${user.username}</li>`).join('')}`;
// }
