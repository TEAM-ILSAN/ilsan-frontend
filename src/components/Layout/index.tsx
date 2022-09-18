import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { color } from '@/styles/theme';
import NavBar from '@/components/Navigation/NavBar';
interface LayoutProps {
  bgColor?: string;
}

function Layout({ children, bgColor }: PropsWithChildren<LayoutProps>) {
  return (
    <StyledLayout bgColor={bgColor}>
      <Wrapper>{children}</Wrapper>
      <NavBar />
    </StyledLayout>
  );
}

const StyledLayout = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100vh;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : color.primary)};
`;

const Wrapper = styled.div`
  padding: 3.6rem 2rem 8rem;
`;

export default Layout;
