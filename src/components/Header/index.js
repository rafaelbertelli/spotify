import React from 'react';

import { Container, Search, User } from './styles';

export default function Header() {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Buscar" />
      </Search>

      <User>
        <img
          src="https://avatars2.githubusercontent.com/u/10123227?v=4"
          alt="Avatart"
        />
        Rafa Borges
      </User>
    </Container>
  );
}
