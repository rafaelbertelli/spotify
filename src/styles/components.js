import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 250px, 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  padding: 0 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
