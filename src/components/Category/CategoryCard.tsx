import styled from '@emotion/styled';
import { CategoryItem } from '@/types/category';
import { MouseEventHandler } from 'react';
import { DynamicIcon } from '@/components/common';
interface CategoryCardProps extends CategoryItem {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const CategoryCard = ({ name, label, color, onClick }: CategoryCardProps) => {
  return (
    <CategoryCardContainer color={color} onClick={onClick}>
      <CategoryIconWrapper>
        <DynamicIcon iconName={label} />
      </CategoryIconWrapper>
      <CategoryName>{name}</CategoryName>
    </CategoryCardContainer>
  );
};

const CategoryCardContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.gutter.size8};
  width: 6.8rem;
  height: 8rem;
  border: 0.2rem solid ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadiuses.large};
  background-color: ${({ theme }) => theme.color.lightgrey};
  color: ${({ color }) => color};
`;

const CategoryIconWrapper = styled.div`
  margin-top: ${({ theme }) => theme.gutter.size8};
`;

const CategoryName = styled.p`
  font-size: ${({ theme }) => theme.font.size16};
`;

export default CategoryCard;
