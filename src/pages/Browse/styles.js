import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 110px;
`;

export const List = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-decoration: none;
  width: 250px;

  &:first-child {
    margin-left: 0;
  }

  &:hover img {
    opacity: 0.6;
  }

  img {
    height: 250px;
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    color: #b3b3b3;
    font-size: 13px;
    line-height: 22px;
    margin-top: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
`;
