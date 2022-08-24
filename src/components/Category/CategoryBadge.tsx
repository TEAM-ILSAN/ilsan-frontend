import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import IconCategoryCoffee from '@/assets/category-coffee.svg';
import { CategoryItem } from '@/types/category';

interface CategoryBadgeProps extends CategoryItem {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CategoryBadge = ({ name, label, color, onClick }: CategoryBadgeProps) => {
  return (
    <CategoryBadgeContainer color={'#f9f9f9'} onClick={onClick}>
      {name}
      <IconCategoryCoffee />
    </CategoryBadgeContainer>
  );
};

export default CategoryBadge;

const CategoryBadgeContainer = styled.button<{ color: string }>`
  display: flex;

  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background: ${({ color }) => color};
  color: white;
`;
