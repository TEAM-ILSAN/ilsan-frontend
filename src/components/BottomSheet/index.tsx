import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

interface BottomSheetProps {
  isDisabled: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const BottomSheet = ({ isDisabled, onClick }: BottomSheetProps) => {
  return <Container></Container>;
};

export default BottomSheet;

const Container = styled.button`
  width: 100%;
  height: 50px;
  color: white;
`;
