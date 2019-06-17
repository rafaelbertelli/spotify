import styled from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Search = styled.div`
  align-items: center;
  background: #fff url(${SearchIcon}) no-repeat 7px center;
  border-radius: 12px;
  display: flex;
  height: 24px;

  padding: 6px 7px 6px 26px;
  width: 175px;

  input {
    border: 0;
    color: #121212;
    flex: 1;
    font-size: 13px;
    max-width: 100%;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;

  img {
    height: 27px;
    width: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
