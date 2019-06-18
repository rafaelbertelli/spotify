import React from 'react';

import { Container, List, Playlist, Title } from './styles';

export default function Browse() {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Angra_-_Rebirth_%282001%29.jpg/220px-Angra_-_Rebirth_%282001%29.jpg"
            alt="Playlist"
          />
          <strong>Rock dos bons</strong>
          <p>Relaxe enquanto você programa enquanto ouve as melhores do rock</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Angra_-_Rebirth_%282001%29.jpg/220px-Angra_-_Rebirth_%282001%29.jpg"
            alt="Playlist"
          />
          <strong>Rock dos bons</strong>
          <p>Relaxe enquanto você programa enquanto ouve as melhores do rock</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Angra_-_Rebirth_%282001%29.jpg/220px-Angra_-_Rebirth_%282001%29.jpg"
            alt="Playlist"
          />
          <strong>Rock dos bons</strong>
          <p>Relaxe enquanto você programa enquanto ouve as melhores do rock</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Angra_-_Rebirth_%282001%29.jpg/220px-Angra_-_Rebirth_%282001%29.jpg"
            alt="Playlist"
          />
          <strong>Rock dos bons</strong>
          <p>Relaxe enquanto você programa enquanto ouve as melhores do rock</p>
        </Playlist>
      </List>
    </Container>
  );
}
