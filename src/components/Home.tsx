import React, { useEffect, useState, useRef, ForwardRefExoticComponent } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import styled from '@emotion/styled';
import BaseLayer from './BaseLayer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = [700, 100];
  const initialSnap = snapPoints.length - 1;
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  const [snapIndex, setSnapIndex] = useState<number>(1);

  useEffect(() => {
    console.log('snapTo');
  }, [snapTo]);

  return (
    <Container>
      <BaseLayer />

      <ParentSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(true)}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        onSnap={(snapIndex) => setSnapIndex(snapIndex)}
      >
        <Sheet.Container>
          <Sheet.Header>
            <HeaderText>현재 카테고리 : 모두</HeaderText>
          </Sheet.Header>
          <Sheet.Content>브ㄹㅏㅡ라</Sheet.Content>
        </Sheet.Container>
      </ParentSheet>
    </Container>
  );
};

export default Home;

const ParentSheet = styled(Sheet)`
  z-index: 900 !important;
`;

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  background: #ddd;
  height: 100vh;
`;

const HeaderText = styled.div`
  padding: 12px 30px;
  background-color: #ff8a00;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
