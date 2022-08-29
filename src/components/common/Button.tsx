import styled from '@emotion/styled';
import { gutter, font, color } from '@/styles/theme';
import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.button`
  padding: ${gutter.size8};
  background-color: ${color.white};
  color: ${color.black};
  font-size: ${font.size14};
  border-radius: 0.4rem;

  &:active {
    background-color: ${color.lightgrey};
  }
`;
