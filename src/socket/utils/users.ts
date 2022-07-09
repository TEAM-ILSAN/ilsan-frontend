export interface User {
  id: string;
  username: string;
  room: string;
}

const users: User[] = [];

// Join user to the room
function userJoin(id: string, username: string, room: string): User {
  const user = { id, username, room };
  users.push(user);
  return user;
}

function getCurrentUser(id: string) {
  return users.find((user) => user.id === id);
}

function userLeave(id: string) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getRoomUsers(room: string): User[] {
  return users.filter((user) => user.room === room);
}

export { userJoin, getCurrentUser, userLeave, getRoomUsers };
