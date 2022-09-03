import { FormEventHandler } from 'react';
import styled from '@emotion/styled';
import SendIcon from '@/assets/icons/send.svg';

const ChatProfileImg = ({
  inputHandler,
  submitHandler,
}: {
  inputHandler: FormEventHandler;
  submitHandler: FormEventHandler;
}): JSX.Element => {
  return (
    <StyledChatForm onSubmit={submitHandler}>
      <AbsoluteButton type="submit">
        <SendIcon />
      </AbsoluteButton>
      <ChatInput onInput={inputHandler} />
    </StyledChatForm>
  );
};

const StyledChatForm = styled.form`
  position: relative;
`;

const AbsoluteButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

const ChatInput = styled.input`
  width: 100%;
  height: 6rem;
  border: none;
  border-radius: 3rem;
`;

export default ChatProfileImg;
