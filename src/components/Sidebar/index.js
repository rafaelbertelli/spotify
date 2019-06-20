import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

import { Container, Nav, NewPlaylist } from './styles';

const StaticNav = () => (
  <>
    <Nav main>
      <li>
        <Link to="/">Navegar</Link>
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
  </>
);

class Sidebar extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        })
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <StaticNav />
          <Nav>
            <li>
              <span>Playlists</span>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlayListIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
