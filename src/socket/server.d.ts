declare module server {
  export interface SocketIO {
    io: typeof import('./server.js');
  }
}
