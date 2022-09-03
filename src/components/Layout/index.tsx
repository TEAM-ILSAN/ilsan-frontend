import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { color } from '@/styles/theme';

interface LayoutProps {
  bgColor?: string;
}

function Layout({ children, bgColor }: PropsWithChildren<LayoutProps>) {
  return <StyledLayout bgColor={bgColor}>{children}</StyledLayout>;
}

const StyledLayout = styled.div<{ bgColor: string }>`
  height: calc(100vh - 6rem);
  padding: 3.6rem 2rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : color.primary)};
`;

export default Layout;
