import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 45px;

  @media screen and (min-width: 700px) {
    height: 100%;
    justify-content: space-around;
  }

  .logo-container {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    > img {
      height: 55px;
    }

    > h1 {
      color: var(--white);
      font-size: 26px;
      line-height: 37px;
      margin-top: 11px;
    }
  }

  p {
    margin-top: 88px;

    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--white);
  }

  strong {
    display: block;
    font-size: 18px;
    line-height: 24px;

    color: #ffffff;
    margin-top: 06px;
  }
`;
