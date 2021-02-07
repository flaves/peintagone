import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect((): any => {
    const tick = (): void => {
      // @ts-ignore
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => clearInterval();
  }, [delay]);
};

export default useInterval;
