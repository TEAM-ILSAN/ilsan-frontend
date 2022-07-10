import React from 'react';
import CommonTitle from '@/components/Typography/Title';
import Layout from '@/components/Layout';
import BottomSheet from '@/components/BottomSheet';
import { MouseEvent } from 'react';

function Playground() {
  const onClickBottomSheet = (event: MouseEvent<HTMLElement>) => {
    console.log('e', event);
  };

  return (
    <Layout>
      <CommonTitle>Component Playground</CommonTitle>
      <BottomSheet isDisabled={false} onClick={onClickBottomSheet} />
    </Layout>
  );
}

export default Playground;
