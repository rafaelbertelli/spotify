import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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

const Player = ({ player }) => {
  return (
    <Container>
      {!!player.currentSong && (
        <Sound url={player.currentSong.file} playStatus={player.status} />
      )}

      <Current>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Angra_-_Rebirth_%282001%29.jpg/220px-Angra_-_Rebirth_%282001%29.jpg"
          alt="Capa do álbum"
        />
        <div>
          <span>Rebirth</span>
          <small>Angra</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="Shuffle" />
          </button>
          <button>
            <img src={BackwardIcon} alt="Backward" />
          </button>
          {/* <button>
            <img src={PauseIcon} alt="Pause" />
          </button> */}
          <button>
            <img src={PlayIcon} alt="Play" />
          </button>
          <button>
            <img src={ForwardIcon} alt="Forward" />
          </button>
          <button>
            <img src={RepeatIcon} alt="Repeat" />
          </button>
        </Controls>

        <Time>
          <span>1:36</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ display: 0 }}
            />
          </ProgressSlider>
          <span>3:31</span>
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
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
