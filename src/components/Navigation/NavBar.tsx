import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import HomeIcon from '@/assets/icons/home.svg';
import HamburgerIcon from '@/assets/icons/hamburger.svg';
import ChatIcon from '@/assets/icons/chat.svg';
import MyPageIcon from '@/assets/icons/mypage.svg';
import { gutter, color } from '@/styles/theme';

const NavBar = (): JSX.Element => {
  return (
    <StyledNavBar>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/chatroom">
        <ChatIcon />
      </Link>
      <Link to="/mypage">
        <MyPageIcon />
      </Link>
      <HamburgerIcon />
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${gutter.size16};
  width: 100%;
  height: 6rem;
  background-color: ${color.darkgrey};
`;

export default NavBar;
