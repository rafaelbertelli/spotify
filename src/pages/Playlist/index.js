import React from 'react';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import { Container, Header, SongList } from './styles';

console.tron.log('Rafiusk!!!');
export default function Playlist() {
  return (
    <Container>
      <Header>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Angra_-_Rebirth_%282001%29.jpg/220px-Angra_-_Rebirth_%282001%29.jpg"
          alt="Playlist"
        />

        <div>
          <span>Playlist</span>
          <h1>Rock dos bão</h1>
          <p>14 músicas</p>

          <button>Play</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Unfinished Allegro</td>
            <td>Angra</td>
            <td>Angels Cry</td>
            <td>1:14</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Tears of the Dragon</td>
            <td>Bruce Dickinson</td>
            <td>Balls to Picasso</td>
            <td>6:24</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Unfinished Allegro</td>
            <td>Angra</td>
            <td>Angels Cry</td>
            <td>1:14</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Tears of the Dragon</td>
            <td>Bruce Dickinson</td>
            <td>Balls to Picasso</td>
            <td>6:24</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Unfinished Allegro</td>
            <td>Angra</td>
            <td>Angels Cry</td>
            <td>1:14</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Tears of the Dragon</td>
            <td>Bruce Dickinson</td>
            <td>Balls to Picasso</td>
            <td>6:24</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Unfinished Allegro</td>
            <td>Angra</td>
            <td>Angels Cry</td>
            <td>1:14</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Tears of the Dragon</td>
            <td>Bruce Dickinson</td>
            <td>Balls to Picasso</td>
            <td>6:24</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Unfinished Allegro</td>
            <td>Angra</td>
            <td>Angels Cry</td>
            <td>1:14</td>
          </tr>

          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar à playlist" />
            </td>
            <td>Tears of the Dragon</td>
            <td>Bruce Dickinson</td>
            <td>Balls to Picasso</td>
            <td>6:24</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
}
