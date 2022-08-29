import { CommonTitle, CommonSubtitle } from '@/components/Typography';
import { Layout } from '@/components/common';
import BottomSheet from '@/components/BottomSheet';
import { MouseEvent } from 'react';
import CategoryBadge from '@/components/Category/CategoryBadge';
import CategoryCard from '@/components/Category/CategoryCard';
import FormBlock from '@/components/common/FormBlock';
import Button from '@/components/common/Button';

function Playground() {
  const onClickBottomSheet = (event: MouseEvent<HTMLElement>) => {
    console.log('e', event);
  };

  const categoryList = [
    { id: 1, name: '커피챗', label: 'coffee-chat', color: '#B573D4' },
    { id: 2, name: '운동', label: 'workout', color: '#ca7373' },
    { id: 3, name: '산책', label: 'walk', color: '#57C068' },
  ];

  return (
    <Layout>
      <CommonTitle>Component Playground</CommonTitle>
      {/* <BottomSheet isDisabled={false} onClick={onClickBottomSheet} /> */}
      <CommonSubtitle>Category Badge</CommonSubtitle>
      {categoryList.map((item) => (
        <CategoryBadge key={item.id} name={item.name} label={item.label} color={item.color} />
      ))}

      <CommonSubtitle>Category Card</CommonSubtitle>
      {categoryList.map((item) => (
        <CategoryCard key={item.id} name={item.name} label={item.label} color={item.color} />
      ))}

      <CommonSubtitle>Form Block</CommonSubtitle>
      <FormBlock title="어디서 모이나요?">
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
        <Button>아아아</Button>
      </FormBlock>
    </Layout>
  );
}

export default Playground;
