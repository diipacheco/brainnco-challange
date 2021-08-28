import { render } from '@testing-library/react';

import ResultNumbers from '../../components/ResultNumbers';

jest.mock('../../hooks/lotteries', () => ({
  useLotteries: () => ({
    contest: {
      id: '2359',
      loteria: 0,
      numeros: ['31', '32', '39', '42', '43', '51'],
      data: '2021-08-26T00:42:05.593Z',
    },
    fetchContest: jest.fn(),
    selectedContest: {
      loteriaId: 0,
      concursoId: 2359,
    },
  }),
}));

describe('ResultNumbers', () => {
  it('should match snapshots', () => {
    const wrapper = render(<ResultNumbers />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to render all result numbers of the selected lottery contest', () => {
    const { getAllByTestId } = render(<ResultNumbers />);

    const list = getAllByTestId('result-number-list');

    expect(list).toHaveLength(6);
  });
});
