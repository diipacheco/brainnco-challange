import { act, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useWindowSize from '../../hooks/useWindowSize';

describe('useWindowSize', () => {
  it('should return the current window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(1024);

    act(() => {
      window = Object.assign(window, { innerWidth: 500 });
    });
    fireEvent(window, new Event('resize'));

    expect(result.current.width).toBe(500);
  });
});
