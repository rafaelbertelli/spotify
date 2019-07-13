import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from '../../store/ducks/player';

import Slider from 'rc-slider';
import Sound from 'react-sound';

import BackwardIcon from '../../assets/images/backward.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import PauseIcon from '../../assets/images/pause.svg';
import PlayIcon from '../../assets/images/play.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import VolumeIcon from '../../assets/images/volume.svg';

import {
  Container,
  Controls,
  Current,
  Progress,
  ProgressSlider,
  Time,
  Volume,
} from './styles';

const Player = ({
  player,
  play,
  pause,
  prev,
  next,
  playing,
  position,
  duration,
}) => {
  return (
    <Container>
      {!!player.currentSong && (
        <Sound
          url={player.currentSong.file}
          playStatus={player.status}
          onFinishedPlaying={next}
          onPlaying={playing}
        />
      )}

      <Current>
        {player.currentSong && (
          <Fragment>
            <img
              src={player.currentSong.thumbnail}
              alt={player.currentSong.album}
            />
            <div>
              <span>{player.currentSong.title}</span>
              <small>{player.currentSong.author}</small>
            </div>
          </Fragment>
        )}
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="Shuffle" />
          </button>
          <button onClick={prev}>
            <img src={BackwardIcon} alt="Backward" />
          </button>

          {!!player.currentSong && player.status === Sound.status.PLAYING ? (
            <button onClick={pause}>
              <img src={PauseIcon} alt="Pause" />
            </button>
          ) : (
            <button onClick={play}>
              <img src={PlayIcon} alt="Play" />
            </button>
          )}

          <button onClick={next}>
            <img src={ForwardIcon} alt="Forward" />
          </button>
          <button>
            <img src={RepeatIcon} alt="Repeat" />
          </button>
        </Controls>

        <Time>
          <span>{position}</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ display: 0 }}
            />
          </ProgressSlider>
          <span>{duration}</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="Botão de volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#FFF' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      album: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

function msToTime(ms) {
  console.log('----------------', ms);
  const minutes = parseInt((ms / (1000 * 60)) % 60, 10);
  let seconds = parseInt((ms / 1000) % 60, 10);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
