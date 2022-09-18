import styled from '@emotion/styled';
import { gutter, font, color } from '@/styles/theme';
import { PropsWithChildren, MouseEventHandler } from 'react';

interface BaseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const BaseButton = ({ children, onClick }: PropsWithChildren<BaseButtonProps>) => {
  return <StyledBaseButton onClick={onClick}>{children}</StyledBaseButton>;
};

export default BaseButton;

const StyledBaseButton = styled.button`
  padding: ${gutter.size8};
  background-color: ${color.white};
  color: ${color.black};
  font-size: ${font.size14};
  border-radius: 0.4rem;

  &:active {
    background-color: ${color.lightgrey};
  }
`;
