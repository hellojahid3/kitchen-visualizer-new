import { useCallback, useEffect, useRef, useState } from 'react';

import type { Position } from '@/types';

interface UsePanProps {
  scale: number;
  isPanMode: boolean;
  onPan: (scale: number, offset: Position) => void;
  globalOffset: Position;
}

export const usePan = ({ scale, isPanMode, onPan, globalOffset }: UsePanProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const moveRef = useRef<Position | null>(null);
  const rafRef = useRef<number>(0);

  const updatePosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!moveRef.current) return;

      const deltaX = clientX - moveRef.current.x;
      const deltaY = clientY - moveRef.current.y;

      onPan(scale, {
        x: globalOffset.x + deltaX / scale,
        y: globalOffset.y + deltaY / scale,
      });

      moveRef.current = { x: clientX, y: clientY };
    },
    [scale, globalOffset, onPan]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isPanMode) {
        e.preventDefault();
        setIsDragging(true);
        moveRef.current = { x: e.clientX, y: e.clientY };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
      }
    },
    [isPanMode]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!(isDragging && isPanMode && scale > 1)) return;

      e.preventDefault();
      rafRef.current = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    },
    [isDragging, isPanMode, scale, updatePosition]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging) {
        e.preventDefault();
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      }
      setIsDragging(false);
      moveRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    },
    [isDragging]
  );

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
};
