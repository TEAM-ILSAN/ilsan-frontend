import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import ChatEdgeLeftSvg from '@/assets/chatedge-left.svg';
import ChatEdgeRightSvg from '@/assets/chatedge-right.svg';

const ChatBubble = ({
  children,
  edgeLocation = 'left',
}: {
  children: string;
  edgeLocation?: 'left' | 'right';
}): JSX.Element => {
  return (
    <StyledChatBubble>
      <ChatContent>{children}</ChatContent>
      {edgeLocation === 'left' && (
        <ChatBubbleLeft>
          <ChatEdgeLeftSvg />
        </ChatBubbleLeft>
      )}
      {edgeLocation === 'right' && (
        <ChatBubbleRight>
          <ChatEdgeRightSvg />
        </ChatBubbleRight>
      )}
    </StyledChatBubble>
  );
};

const StyledChatBubble = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  position: relative;
  padding: 1.5rem;
`;

const ChatContent = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.font.size16};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.6rem;
  padding: ${({ theme }) => theme.gutter.size8};
`;

const ChatBubbleLeft = styled.div`
  position: absolute;
  top: 2.8rem;
  left: 0;
`;

const ChatBubbleRight = styled.div`
  position: absolute;
  top: 2.8rem;
  right: 0;
`;

export default ChatBubble;
