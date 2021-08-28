import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  margin-top: 13px;

  @media screen and (min-width: 700px) {
    margin: 0;
  }
`;

export const NumbersList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  list-style: none;

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 8px;

    width: 44px;
    height: 44px;

    @media screen and (min-width: 700px) {
      width: 111px;
      height: 111px;
      margin: 10px 10px;

      font-size: 26px;
    }

    background: var(--white);
    border-radius: 50%;

    font-weight: 700;
    font-size: 20px;
  }
`;
