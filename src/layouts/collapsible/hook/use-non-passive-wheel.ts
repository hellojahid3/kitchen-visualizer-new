import { type DependencyList, type RefObject, useEffect } from 'react';

export const useNonPassiveWheel = (
  ref: RefObject<HTMLElement | null>,
  handler: (e: WheelEvent) => void,
  deps: DependencyList = []
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('wheel', handler, { passive: false });

    return () => {
      element.removeEventListener('wheel', handler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler, ...deps]);
};
