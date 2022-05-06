import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import HomeIcon from '@/assets/home.svg';
import HamburgerIcon from '@/assets/hamburger.svg';
import ChatIcon from '@/assets/chat.svg';
import MyPageIcon from '@/assets/mypage.svg';

const NavBar = () => {
  return (
    <StyledNavBar>
      <HomeIcon />
      <ChatIcon />
      <MyPageIcon />
      <HamburgerIcon />
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.gutter.size16};
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.color.darkgrey};
`;

export default NavBar;
