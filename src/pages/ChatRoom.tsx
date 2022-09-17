import { FormEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CommonTitle from '@/components/Typography/Title';
import ChatRoomRow from '@/components/ChatRoom/ChatRoomRow';
import { Layout } from '@/components/common';
import ChatForm from '@/components/ChatRoom/ChatForm';

import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '../socket/types';
import { Message } from '../socket/utils/messages';
import { User } from '../socket/utils/users';
import { color } from '@/styles/theme';

const END_POINT = 'http://localhost:3000';
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(END_POINT);

function ChatRoom() {
  const [inputVal, setInputVal] = useState('');
  const [receivedMessage, setReceivedMessage] = useState<Message>();
  const [roomUsers, setRoomUsers] = useState<User[]>([]);
  const inputHandler = ({ target, currentTarget }: React.FormEvent<HTMLInputElement>) => {
    setInputVal(currentTarget.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    socket.emit('chatMessage', inputVal);
  };

  useEffect(() => {
    socket.on('message', (data: Message) => {
      console.log('data', data);
      setReceivedMessage(data);
    });

    socket.on('roomUsers', ({ room, users }: { room: string; users: User[] }) => {
      setRoomUsers(users);
    });
  }, []);

  const onJoinRoom = () => {
    const username = 'testuser';
    const room = 'testRoom';

    socket.on('connect', () => {
      console.log('client connect -- socket.id', socket.id);
    });

    socket.emit('joinRoom', { username, room });
  };

  return (
    <Layout>
      <StyledChatRoom>
        <ChatWrapper>
          <CommonTitle>채팅방 화면</CommonTitle>
          <button onClick={onJoinRoom}>방 입장</button>
          <ChatRoomRow imgSrc="https://cdn.pixabay.com/photo/2022/01/29/06/07/couple-6976409_1280.jpg" isMyChat={false}>
            {inputVal}
          </ChatRoomRow>
          <ChatRoomRow imgSrc="https://cdn.pixabay.com/photo/2022/01/29/06/07/couple-6976409_1280.jpg" isMyChat={true}>
            아아앋가ㅓ다거
          </ChatRoomRow>
          <p>{receivedMessage?.username}</p>
          <p>{receivedMessage?.text}</p>
          <p>{receivedMessage?.time}</p>
        </ChatWrapper>
        {roomUsers.length > 0 && roomUsers.map((user) => <p key={user.id}>{user.username}</p>)}
        <ChatFormWrapper>
          <ChatForm inputHandler={inputHandler} submitHandler={submitHandler} />
        </ChatFormWrapper>
      </StyledChatRoom>
    </Layout>
  );
}

const StyledChatRoom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${color.primary};
`;

const ChatFormWrapper = styled.div`
  position: fixed;
  bottom: 8rem;
`;

const ChatWrapper = styled.div``;

export default ChatRoom;
