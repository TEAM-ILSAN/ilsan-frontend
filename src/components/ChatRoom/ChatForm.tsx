import React, { FormEventHandler } from 'react';
import styled from '@emotion/styled';

const ChatProfileImg = ({ inputHandler }: { inputHandler: FormEventHandler }): JSX.Element => {
  return <StyledChatForm onInput={inputHandler} />;
};

const StyledChatForm = styled.input`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
`;

export default ChatProfileImg;
