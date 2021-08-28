import { render, act } from '@testing-library/react';

import Header from '../../components/Header';

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
    contest: {
      data: '2021-08-25T04:32:48.857Z',
      id: '2359',
      loteria: 0,
      numeros: ['31', '32', '39', '42', '43', '51'],
    },
    selectedContest: {
      loteriaId: 0,
      concursoId: 2359,
    },
  }),
}));

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = render(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to render the lottery name', () => {
    const { container } = render(<Header />);

    const lotteryNameElement = container.querySelector('h1');

    expect(lotteryNameElement?.innerHTML).toBe('MEGA-SENA');
  });

  it('should be able to render the lottery contest number and date', () => {
    const { container } = render(<Header />);

    const lotteryContestNumberAndDateElement =
      container.querySelector('strong');

    expect(lotteryContestNumberAndDateElement?.innerHTML).toBe(
      '2359 – 25/08/2021',
    );
  });

  it('should render only the contest number on mobile devices', () => {
    act(() => {
      window = Object.assign(window, { innerWidth: 700 });
    });

    const { getByText } = render(<Header />);

    const lotteryContestNumberElement = getByText('CONCURSO Nº 2359');

    expect(lotteryContestNumberElement).toBeInTheDocument();
  });
});
