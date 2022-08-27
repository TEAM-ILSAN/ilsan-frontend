import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { EdgeDirection } from '@/constants/common';
import ChatProfileImg from '@/components/ChatRoom/ChatProfileImg';
import ChatBubble from '@/components/ChatRoom/ChatBubble';
import { gutter } from '@/styles/theme';
interface ChatRoomRowProps {
  imgAlt?: string;
  imgSrc?: string;
  isMyChat: boolean;
}

const ChatRoomRow = ({ children, imgSrc, isMyChat }: PropsWithChildren<ChatRoomRowProps>) => {
  return (
    <StyledChatRoomRow isMyChat={isMyChat}>
      {isMyChat && <ChatBubble edgeLocation={EdgeDirection.RIGHT}>{children}</ChatBubble>}
      {!isMyChat && (
        <>
          <ChatProfileImg alt="profile-img" src={imgSrc} />
          <ChatBubble>{children}</ChatBubble>
        </>
      )}
    </StyledChatRoomRow>
  );
};

const StyledChatRoomRow = styled.div<{ isMyChat: boolean }>`
  display: flex;
  padding: ${gutter.size16};
  ${({ isMyChat }) => isMyChat && 'justify-content: flex-end'};

  > img {
    margin-right: ${gutter.size8};
  }
`;

export default ChatRoomRow;
