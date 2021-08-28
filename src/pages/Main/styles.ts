import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DisclaimerMessage = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  color: var(--black);
  margin-top: 50px;

  @media screen and (min-width: 700px) {
    position: absolute;
    top: 90%;
    margin: 0;
    font-size: 16px;
  }
`;
