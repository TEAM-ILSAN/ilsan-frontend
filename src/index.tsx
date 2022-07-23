import { css, Global, ThemeProvider } from '@emotion/react';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import NavBar from './components/Navigation/NavBar';
import Step from './components/SignIn/Step';
import ChatRoom from './pages/ChatRoom';
import ChatRoomDescription from './pages/ChatRoomDescription';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import SignIn from './pages/SignIn';
import baseTheme from './styles/baseTheme';
import GlobalStyles from './styles/globalStyles';
import Playground from './pages/Playground';

function RootWithCallbackAfterRender() {
  return (
    <React.Fragment>
      <ThemeProvider theme={baseTheme}>
        <Global
          styles={css`
            ${GlobalStyles}
          `}
        />
        <RecoilRoot>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="playground" element={<Playground />} />
              <Route path="chatroom" element={<ChatRoom />} />
              <Route path="starting-chatroom" element={<ChatRoomDescription />} />
              <Route path="sign-in/*" element={<SignIn />}>
                <Route path=":step" element={<Step />} />
                <Route path="*" element={<Step props={1} />} />
              </Route>
              <Route path="mypage" element={<MyPage />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </React.Fragment>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RootWithCallbackAfterRender />);

if (module.hot) {
  module.hot.accept();
}
