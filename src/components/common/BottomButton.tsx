import styled from '@emotion/styled';
import { gutter, font, color } from '@/styles/theme';
import { PropsWithChildren, MouseEventHandler } from 'react';
import DynamicIcon from '@/components/common/DynamicIcon';

interface BottomButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  hasArrow?: boolean;
}

const BottomButton = ({ text, onClick, hasArrow = true }: BottomButtonProps) => {
  return (
    <StyledBottomButton onClick={onClick}>
      {text}
      {hasArrow && <DynamicIcon iconName="arrow" />}
    </StyledBottomButton>
  );
};

export default BottomButton;

const StyledBottomButton = styled.button`
  width: 100%;
  position: absolute;
  bottom: 6rem;
  padding: ${gutter.size12} 0;
  background-color: ${color.white};
  color: ${color.black};
  font-size: ${font.size14};

  &:active {
    background-color: ${color.lightgrey};
  }
`;
