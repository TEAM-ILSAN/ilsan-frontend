import React, { ReactChild } from 'react';
import styled from '@emotion/styled';

const Title = ({ children }: { children: ReactChild }): JSX.Element => {
  return <StyledTitle>{children}</StyledTitle>;
};

// TODO: 실제 사용되는 타이틀 사이즈, 스타일로 변경
const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.font.size22};
`;

export default Title;
