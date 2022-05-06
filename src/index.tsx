import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import baseTheme from './styles/baseTheme';
import './styles/globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import NavBar from '@/components/common/NavBar';
import Main from './pages/Main';
import ChatRoom from './pages/ChatRoom';

function RootWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={baseTheme}>
        <RecoilRoot>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="chatroom" element={<ChatRoom />} />
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
