import styled from 'styled-components';

import { IBackgroundProps } from './index';

export const backgroundColors = {
  'MEGA-SENA': 'var(--green-light)',
  QUINA: 'var(--purple-dark)',
  LOTOFÁCIL: 'var(--purple-light)',
  LOTOMANIA: 'var(--orange)',
  TIMEMANIA: 'var(--green-dark)',
  'DIA DE SORTE': 'var(--yellow-ocre)',
};

export const Container = styled.div<IBackgroundProps>`
  width: 100%;
  height: 390px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background-color: ${props => {
    switch (props.selectedLottery) {
      case 'MEGA-SENA':
        return backgroundColors['MEGA-SENA'];
      case 'QUINA':
        return backgroundColors.QUINA;
      case 'LOTOFÁCIL':
        return backgroundColors.LOTOFÁCIL;
      case 'LOTOMANIA':
        return backgroundColors.LOTOMANIA;
      case 'TIMEMANIA':
        return backgroundColors.TIMEMANIA;
      case 'DIA DE SORTE':
        return backgroundColors['DIA DE SORTE'];
      default:
        return backgroundColors['MEGA-SENA'];
    }
  }};

  @media screen and (min-width: 700px) {
    height: 100vh;
    max-width: 550px;

    &::after {
      content: '';
      width: 40px;
      height: 100%;
      background-color: var(--background);
      position: absolute;
      border-radius: 62%;
      right: -19px;
    }
  }

  @media screen and (max-width: 700px) {
    &::after {
      content: '';
      width: 100%;
      height: 52px;
      background-color: var(--background);
      position: absolute;
      border-radius: 40%;
      top: 92%;
    }
  }
`;
