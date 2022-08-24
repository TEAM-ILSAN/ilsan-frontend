import { CategoryItem } from '@/types/category';
import { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

interface CategoryCardProps extends CategoryItem {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CategoryCard = ({ name, color }: CategoryCardProps) => {
  return <CategoryCardContainer color={color}>{name}</CategoryCardContainer>;
};

const CategoryCardContainer = styled.div`
  width: 6rem;
  height: 10rem;
  border-radius: 4rem;
  background-color: ${({ color }) => color};
`;

export default CategoryCard;
