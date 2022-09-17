import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { color } from '@/styles/theme';

interface LayoutProps {
  bgColor?: string;
}

function Layout({ children, bgColor }: PropsWithChildren<LayoutProps>) {
  // const currentHeight = document.getElementById('height-control').clientHeight;
  // console.log('currentHeight', currentHeight);

  return <StyledLayout bgColor={bgColor}>{children}</StyledLayout>;
}

const StyledLayout = styled.div<{ bgColor: string }>`
  // TODO: 17rem 이 모바일 바 height + 6rem(GNB height) 가 되어야함
  height: calc(100vh - 17rem);
  overflow: auto;
  border: 1px solid red;
  padding: 3.6rem 2rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : color.primary)};
`;

export default Layout;
