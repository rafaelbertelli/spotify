import styled, { css } from 'styled-components';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 48px;
  }

  ${props =>
    props.loading &&
    css`
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
    `}
`;

export const Header = styled.header`
  align-items: center;
  display: flex;

  img {
    height: 220px;
    width: 220px;
  }

  div {
    margin-left: 20px;

    span {
      font-size: 11px;
      font-weight: 300;
      letter-spacing: 1.11px;
    }

    h1 {
      margin-top: 10px;
      font-size: 48px;
    }

    p {
      color: #b3b3b3;
      font-size: 11px;
      letter-spacing: 1.11px;
      margin-top: 0;
      text-transform: uppercase;
    }

    button {
      background: #1db854;
      border: 0;
      border-radius: 16px;
      color: #fff;
      font-size: 10px;
      height: 32px;
      letter-spacing: 1.11px;
      line-height: 32px;
      margin-top: 10px;
      padding: 0 35px;
    }
  }
`;

export const SongItem = styled.tr`
  &:hover td {
    background-color: #282828;
  }

  td {
    background: ${props => (props.selected ? '#282828' : 'transparent')};
    border-top: 1px solid #282828;
    color: ${props => (props.playing ? '#1ED760' : '#FFF')}
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  th {
    font-size: 11px;
    color: #bebebe;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    &:last-child {
      text-align: right;
    }
  }
`;
