import { useCallback, useState } from 'react';

import type { Position } from '@/types';
import { VIEWPORT_CONFIG } from '../config';

interface UseZoomProps {
  calculateMaxOffsets: (scale: number) => Position;
}

export const useZoom = ({ calculateMaxOffsets }: UseZoomProps) => {
  const [scale, setScale] = useState(1);
  const [globalOffset, setGlobalOffset] = useState<Position>({ x: 0, y: 0 });

  const handleZoom = useCallback(
    (newScale: number, newOffset?: Position) => {
      setScale(prevScale => {
        // Bound the new scale within min and max limits
        const boundedScale = Math.max(
          VIEWPORT_CONFIG.minScale,
          Math.min(newScale, VIEWPORT_CONFIG.maxScale)
        );
        const maxOffsets = calculateMaxOffsets(boundedScale);

        // When at or below 100% zoom, always center the image
        if (boundedScale <= 1) {
          setGlobalOffset({ x: 0, y: 0 });

          return boundedScale;
        }

        // Handle panning with provided offset
        if (newOffset) {
          setGlobalOffset({
            x: Math.max(-maxOffsets.x, Math.min(maxOffsets.x, newOffset.x)),
            y: Math.max(-maxOffsets.y, Math.min(maxOffsets.y, newOffset.y)),
          });

          return boundedScale;
        }

        // Handle zooming with relative position
        setGlobalOffset(prevOffset => {
          const scaleFactor = boundedScale / prevScale;
          const adjustedOffset = {
            x: prevOffset.x * scaleFactor,
            y: prevOffset.y * scaleFactor,
          };

          return {
            x: Math.max(-maxOffsets.x, Math.min(maxOffsets.x, adjustedOffset.x)),
            y: Math.max(-maxOffsets.y, Math.min(maxOffsets.y, adjustedOffset.y)),
          };
        });

        return boundedScale;
      });
    },
    [calculateMaxOffsets]
  );

  const resetView = useCallback(() => {
    setScale(1);
    setGlobalOffset({ x: 0, y: 0 });
  }, []);

  return {
    scale,
    globalOffset,
    handleZoom,
    resetView,
  };
};
