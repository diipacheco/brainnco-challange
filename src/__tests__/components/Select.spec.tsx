import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '../../components/Select';

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
    selectedLottery: 'MEGA-SENA',
    fetchLotteries: jest.fn(),
    handleSelectedLottery: jest.fn(),
  }),
}));

describe('Select', () => {
  it('should match snapshots', () => {
    const wrapper = render(<Select />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to render all lotteries options', () => {
    const { getByTestId } = render(<Select />);

    const selectElement = getByTestId('select');

    expect(selectElement).toHaveLength(6);
  });

  it('should be able to select a specific lottery', () => {
    const { getByTestId } = render(<Select />);

    const selectElement = getByTestId('select');

    userEvent.selectOptions(selectElement, 'QUINA');

    expect(
      (getByTestId('selected-option-0') as HTMLOptionElement).selected,
    ).toBeFalsy();
    expect(
      (getByTestId('selected-option-1') as HTMLOptionElement).selected,
    ).toBeTruthy();
  });
});
