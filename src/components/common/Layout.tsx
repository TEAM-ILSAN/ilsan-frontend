import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { color } from '@/styles/theme';
import useWindowDimensions from '@/hooks/useWindowDimensions';
interface LayoutProps {
  bgColor?: string;
}

function Layout({ children, bgColor }: PropsWithChildren<LayoutProps>) {
  const { height, width, controlHeight } = useWindowDimensions();
  const barHeight = height - controlHeight;

  return (
    <StyledLayout bgColor={bgColor} barHeight={barHeight}>
      {children}
    </StyledLayout>
  );
}

const StyledLayout = styled.div<{ bgColor: string; barHeight: number }>`
  height: ${({ barHeight }) => `calc(100vh - ${barHeight + 6}rem)`};
  overflow: auto;
  border: 1px solid red;
  padding: 3.6rem 2rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : color.primary)};
`;

export default Layout;
