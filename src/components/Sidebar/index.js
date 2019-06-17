import React from 'react';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';
import { Container, Nav, NewPlaylist } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a>Navegar</a>
          </li>
          <li>
            <a>Rádio</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Sua Biblioteca</span>
          </li>
          <li>
            <a>Seu daily mix</a>
          </li>
          <li>
            <a>Tocados recentemente</a>
          </li>
          <li>
            <a>Músicas</a>
          </li>
          <li>
            <a>Álbuns</a>
          </li>
          <li>
            <a>Artistas</a>
          </li>
          <li>
            <a>Estações</a>
          </li>
          <li>
            <a>Arquivos locais</a>
          </li>
          <li>
            <a>Vídeos</a>
          </li>
          <li>
            <a>Podcasts</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Playlists</span>
          </li>
          <li>
            <a>Melhores do Rock</a>
          </li>
        </Nav>
      </div>

      <NewPlaylist>
        <img src={AddPlayListIcon} alt="Adicionar playlist" />
        Nova playlist
      </NewPlaylist>
    </Container>
  );
}
