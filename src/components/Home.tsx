import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import BaseLayer from './BaseLayer';
import Layout from '@/components/common/Layout';
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

  // useEffect(() => {
  //   getMyGps();
  //   mapDrawer();
  // }, []);

  // useEffect(() => {
  //   const { kakao } = window;
  //   if (location !== null) {
  //     const container = document.getElementById('myMap');
  //     const options = {
  //       center: new kakao.maps.LatLng(location.latitude, location.longitude),
  //       level: 3,
  //     };
  //     const map = new kakao.maps.Map(container, options);
  //   }
  // }, [location]);

  return (
    <Layout>
      <BaseLayer />
    </Layout>
  );
};

export default Home;

const HeaderText = styled.div`
  padding: 1.2rem 3rem;
  background-color: #ff8a00;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
`;
