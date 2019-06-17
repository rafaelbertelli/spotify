import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #121212;
  color: '#b3b3b3';
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 200px;

  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }

  a {
    color: inherit;
    font-size: 13px;
    font-weight: ${props => (props.main ? 'bold' : 'regular')};
    text-decoration: none;
    line-height: 32px;

    &:hover {
      color: #b3b3b3;
    }
  }

  span {
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 1.11px;
    line-height: 22px;
    text-transform: uppercase;
  }
`;

export const NewPlaylist = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  color: #b3b3b3;
  display: flex;
  font-size: 13px;
  padding: 15px 25px;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
