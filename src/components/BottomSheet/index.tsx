import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

interface BottomSheetProps {
  isDisabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BottomSheet = ({ isDisabled, onClick }: BottomSheetProps) => {
  return <Container onClick={onClick} disabled={isDisabled}></Container>;
};

export default BottomSheet;

const Container = styled.button`
  width: 100%;
  height: 50px;
  background: ${({ disabled }) => (disabled ? 'gray' : 'black')};
  color: white;
`;
