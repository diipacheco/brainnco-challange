/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';

interface IWindowSize {
  width: number | undefined;
}
const useWindowSize = (): IWindowSize => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({} as IWindowSize);

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
