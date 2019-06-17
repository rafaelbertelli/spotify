import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { GlobalStyle } from './styles/global';
import { Container, Content, Wrapper } from './styles/components';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
