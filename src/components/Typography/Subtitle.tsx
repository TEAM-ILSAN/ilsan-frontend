import { ReactChild } from 'react';
import styled from '@emotion/styled';
import { font } from '@/styles/theme';

const Subtitle = ({ children }: { children: ReactChild }): JSX.Element => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
};

// TODO: 실제 사용되는 타이틀 사이즈, 스타일로 변경
const StyledSubtitle = styled.div`
  font-size: ${font.size18};
`;

export default Subtitle;
