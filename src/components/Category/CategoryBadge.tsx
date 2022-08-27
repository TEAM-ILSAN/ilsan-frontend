import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import IconCategoryCoffee from '@/assets/category-coffee.svg';
import { CategoryItem } from '@/types/category';

interface CategoryBadgeProps extends CategoryItem {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CategoryBadge = ({ color, onClick }: CategoryBadgeProps) => {
  return (
    <CategoryBadgeContainer color={color} onClick={onClick}>
      <IconCategoryCoffee />
      <TintedBackground color={color} />
    </CategoryBadgeContainer>
  );
};

export default CategoryBadge;

const CategoryBadgeContainer = styled.button<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  width: 5rem;
  height: 5rem;
  border-radius: ${({ theme }) => theme.borderRadiuses.circle};

  > svg {
    z-index: ${({ theme }) => theme.zIndexes.default};

    path {
      fill: ${({ color }) => color};
    }
  }
`;

const TintedBackground = styled.div<{ color: string }>`
  position: absolute;
  filter: brightness(1.5);
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`;
