import React from 'react';
import { CommonTitle, CommonSubtitle } from '@/components/Typography';
import Layout from '@/components/Layout';
import BottomSheet from '@/components/BottomSheet';
import { MouseEvent } from 'react';
import CategoryBadge from '@/components/Category/CategoryBadge';
import CategoryCard from '@/components/Category/CategoryCard';

function Playground() {
  const onClickBottomSheet = (event: MouseEvent<HTMLElement>) => {
    console.log('e', event);
  };

  const categoryList = [
    { id: 1, name: '커피챗', label: 'coffee-chat', color: '#B573D4' },
    { id: 2, name: '운동', label: 'workout', color: '#ca7373' },
  ];

  return (
    <Layout>
      <CommonTitle>Component Playground</CommonTitle>
      <BottomSheet isDisabled={false} onClick={onClickBottomSheet} />
      <CommonSubtitle>Category Badge</CommonSubtitle>
      {categoryList.map((item) => (
        <CategoryBadge key={item.id} name={item.name} label={item.label} color={item.color} />
      ))}

      <CommonSubtitle>Category Card</CommonSubtitle>
      {categoryList.map((item) => (
        <CategoryCard key={item.id} name={item.name} label={item.label} color={item.color} />
      ))}
    </Layout>
  );
}

export default Playground;
