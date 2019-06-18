import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #282828;
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 12px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: 0;
    margin: 0 15px;
  }
`;

export const Current = styled.div`
  align-items: center;
  display: flex;

  img {
    height: 48px;
    width: 48px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      color: #fff;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;