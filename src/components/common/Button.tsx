import styled from '@emotion/styled';
import { gutter, font, color } from '@/styles/theme';
import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.div`
  padding: ${gutter.size8};
  background-color: ${color.white};
  color: ${color.black};
  font-size: ${font.size14};

  &:hover {
    background-color: ${color.white};
  }

  &:active {
    background-color: ${color.grey};
  }
`;
