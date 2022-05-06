import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';
import baseTheme from './styles/baseTheme';
import './styles/globals.css';
import GlobalStyles from './styles/globalStyles';
import NavBar from '@/components/common/NavBar';

function RootWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={baseTheme}>
        <RecoilRoot>
          <NavBar />
          <Main />
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
