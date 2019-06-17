import React from 'react';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { GlobalStyle } from './styles/global';
import { Container, Content, Wrapper } from './styles/components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />

          <Content>
            <Header />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </>
  );
}

export default App;
