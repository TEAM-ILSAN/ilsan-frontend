import React, { useEffect, useState, useRef, ForwardRefExoticComponent } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import styled from '@emotion/styled';
import BaseLayer from './BaseLayer';

declare global {
  interface Window {
    kakao: any;
  }
}

interface ILocation {
  latitude: number;
  longitude: number;
}

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = [700, 100];
  const initialSnap = snapPoints.length - 1;
  const [snapIndex, setSnapIndex] = useState<number>(1);
  const { kakao } = window;

  // 접속한 위치의 위도와 경도를 저장 할 변수
  const [location, setLocation] = useState<ILocation>(null);

  const getMyGps = () => {
    return new Promise((resolve, rejected) => {
      navigator.geolocation.getCurrentPosition(resolve, rejected);
    });
  };

  const mapDrawer = async () => {
    try {
      let position: any = await getMyGps();
      setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
    } catch (err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  };

  useEffect(() => {
    getMyGps();
    mapDrawer();
  }, []);

  useEffect(() => {
    if (location !== null) {
      const container = document.getElementById('myMap');
      const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
    }
  }, [location]);

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
          <Sheet.Content>
            <div
              id="myMap"
              style={{
                width: '100%',
                height: '45rem',
              }}
            ></div>
          </Sheet.Content>
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
  width: 100%;
  background: #ddd;
  height: 100vh;
`;

const HeaderText = styled.div`
  padding: 1.2rem 3rem;
  background-color: #ff8a00;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
`;
