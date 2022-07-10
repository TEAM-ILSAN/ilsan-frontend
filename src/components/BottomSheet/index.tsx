import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import BottomSheetHeader from './BottomSheetHeader';
import { BOTTOM_SHEET_HEIGHT } from '@/constants/components';
import { useBottomSheet } from '@/hooks/useBottomSheet';

interface BottomSheetProps {
  isDisabled: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const BottomSheet = ({ isDisabled, onClick }: BottomSheetProps) => {
  const { sheet } = useBottomSheet();

  return (
    <Wrapper ref={sheet}>
      <BottomSheetHeader></BottomSheetHeader>
      <BottomSheetContent></BottomSheetContent>
    </Wrapper>
  );
};

export default BottomSheet;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT / 10}rem;
`;

const BottomSheetContent = styled.div`
  color: white;
  border: 0.1rem solid blue;
`;
