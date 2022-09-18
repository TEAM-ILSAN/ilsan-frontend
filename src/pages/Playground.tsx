import { CommonTitle, CommonSubtitle } from '@/components/Typography';
import { Layout } from '@/components/common';
import BottomSheet from '@/components/BottomSheet';
import { MouseEvent } from 'react';
import CategoryBadge from '@/components/Category/CategoryBadge';
import CategoryCard from '@/components/Category/CategoryCard';
import FormBlock from '@/components/common/FormBlock';
import BaseButton from '@/components/common/BaseButton';
import styled from '@emotion/styled';
import { font, gutter } from '@/styles/theme';
import BottomButton from '@/components/common/BottomButton';

function Playground() {
  const onClickBottomSheet = (event: MouseEvent<HTMLElement>) => {
    console.log('e', event);
  };

  const categoryList = [
    { id: 1, name: '커피챗', label: 'coffee-chat', color: '#B573D4' },
    { id: 2, name: '운동', label: 'workout', color: '#ca7373' },
    { id: 3, name: '산책', label: 'walk', color: '#57C068' },
  ];

  const onClickBaseButton = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('onClickBaseButton', event);
  };

  return (
    <Layout>
      <CommonTitle>Component Playground</CommonTitle>
      {/* <BottomSheet isDisabled={false} onClick={onClickBottomSheet} /> */}
      <PlaygroundSubtitle>Category Badge</PlaygroundSubtitle>
      <PlaygroundRow>
        {categoryList.map((item) => (
          <CategoryBadge key={item.id} name={item.name} label={item.label} color={item.color} />
        ))}
      </PlaygroundRow>

      <PlaygroundSubtitle>Category Card</PlaygroundSubtitle>
      <PlaygroundRow>
        {categoryList.map((item) => (
          <CategoryCard key={item.id} name={item.name} label={item.label} color={item.color} />
        ))}
      </PlaygroundRow>

      <PlaygroundSubtitle>Form Block</PlaygroundSubtitle>
      <FormBlock title="언제 모이나요?">
        <ButtonGroup>
          <BaseButton onClick={onClickBaseButton}>오늘</BaseButton>
          <BaseButton onClick={onClickBaseButton}>내일</BaseButton>
        </ButtonGroup>
      </FormBlock>
      <BottomButton text="다음" onClick={onClickBaseButton} />
    </Layout>
  );
}

export default Playground;

const PlaygroundSubtitle = styled.div`
  margin-top: ${gutter.size20};
  margin-bottom: ${gutter.size16};
  font-size: ${font.size18};
`;

const PlaygroundRow = styled.div`
  display: flex;

  > button ~ button {
    margin-left: ${gutter.size12};
  }

  > div ~ div {
    margin-left: ${gutter.size12};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: ${gutter.size16};

  > button ~ button {
    margin-left: ${gutter.size12};
  }
`;
