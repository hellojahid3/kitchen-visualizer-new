import { type RefObject, useEffect, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

export function useContainerSize(containerRef: RefObject<HTMLDivElement | null>): Size {
  const [containerSize, setContainerSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateContainerSize);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [containerRef]);

  return containerSize;
}
