import { render } from '@testing-library/react';

import Background from '../../components/Background';

describe('Background', () => {
  it('should match snapshots', () => {
    const wrapper = render(<Background selectedLottery="megaSena" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to render with the specific background color from the selected lottery', () => {
    const { container } = render(<Background selectedLottery="megaSena" />);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'var(--green-light)',
    );
  });
});
