import { Message } from './utils/messages';
import { User } from './utils/users';

export interface ServerToClientEvents {
  message: (message: Message) => void;
  roomUsers: ({ room, users }: { room: string; users: User[] }) => void;
}

export interface ClientToServerEvents {
  message: (message: Message) => void;
  joinRoom: ({ username, room }: { username: string; room: string }) => void;
  chatMessage: (msg: string) => void;
}

export interface InterServerEvents {
  // MEMO: mock data
  ping: () => void;
}

export interface SocketData {
  // MEMO: mock data
  id: number;
  name: string;
  age: number;
}
