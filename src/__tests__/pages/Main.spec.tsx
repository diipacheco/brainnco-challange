import { render } from '@testing-library/react';

import Main from '../../pages/Main';

jest.mock('../../hooks/lotteries', () => ({
  useLotteries: () => ({
    lotteries: [
      {
        id: 0,
        nome: 'mega-sena',
      },
      {
        id: 1,
        nome: 'quina',
      },
      {
        id: 2,
        nome: 'lotofácil',
      },
      {
        id: 3,
        nome: 'lotomania',
      },
      {
        id: 4,
        nome: 'timemania',
      },
      {
        id: 5,
        nome: 'dia de sorte',
      },
    ],
    fetchLotteries: jest.fn(),
    selectedLottery: {
      id: 0,
      nome: 'MEGA-SENA',
    },
    handleSelectedLottery: jest.fn(),
    fetchSelectedContests: jest.fn(),
    fetchContest: jest.fn(),
    selectedContest: {
      loteriaId: 0,
      concursoId: 2359,
    },
  }),
}));

describe('Main', () => {
  it('should match snapshots', () => {
    const wrapper = render(<Main />);

    expect(wrapper).toMatchSnapshot();
  });
});
