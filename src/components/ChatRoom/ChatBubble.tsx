import React, { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';
import ChatEdgeLeftSvg from '@/assets/icons/chatedge-left.svg';
import ChatEdgeRightSvg from '@/assets/icons/chatedge-right.svg';
import { EdgeDirection } from '@/constants/common';

const ChatBubble = ({
  children,
  edgeLocation = EdgeDirection.LEFT,
}: {
  children: ReactNode;
  edgeLocation?: keyof typeof EdgeDirection;
}): JSX.Element => {
  return (
    <StyledChatBubble>
      <ChatContent>{children}</ChatContent>
      {edgeLocation === EdgeDirection.LEFT && (
        <ChatBubbleLeft>
          <ChatEdgeLeftSvg />
        </ChatBubbleLeft>
      )}
      {edgeLocation === EdgeDirection.RIGHT && (
        <ChatBubbleRight>
          <ChatEdgeRightSvg />
        </ChatBubbleRight>
      )}
    </StyledChatBubble>
  );
};

const StyledChatBubble = styled.div`
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
