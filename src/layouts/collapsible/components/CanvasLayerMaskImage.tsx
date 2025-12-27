import { useCallback, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { VIEWPORT_CONFIG } from '../config';
import { CanvasLayerMaskImageBox, LayerMaskImage } from './CanvasLayerMaskImage.styled';

type CanvasLayerMaskImageProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
  type?: string;
  src: string;
  zindex: number;
  className?: string;
  x?: number;
  y?: number;
};

export default function CanvasLayerMaskImage({
  type = 'default',
  src,
  zindex,
  className,
  x = 0,
  y = 0,
  canvasLayersRef,
}: CanvasLayerMaskImageProps) {
  const showUiElements = useSelector((state: RootState) => state.visualizer.showUiElements);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const applyImageSizing = useCallback(() => {
    const imgEl = imageRef.current;
    const containerEl = canvasLayersRef.current;
    if (!imgEl || !containerEl) return;

    const { fullscreenExtension = 0, aspectRatio = 16 / 9 } = VIEWPORT_CONFIG;

    if (showUiElements) {
      const containerWidth = containerEl.clientWidth || 1;
      const containerHeight = containerEl.clientHeight || 1;
      const containerAspect = containerWidth / containerHeight;

      let width: number;
      let height: number;

      if (aspectRatio > containerAspect) {
        width = containerWidth;
        height = Math.round(containerWidth / aspectRatio);
      } else {
        height = containerHeight;
        width = Math.round(containerHeight * aspectRatio);
      }

      imgEl.style.setProperty('--layer-img-width', `${width}px`);
      imgEl.style.setProperty('--layer-img-height', `${height}px`);
    } else {
      imgEl.style.setProperty('--layer-img-width', `calc(100% - ${fullscreenExtension}px)`);
      imgEl.style.setProperty('--layer-img-height', 'auto');
    }
  }, [canvasLayersRef, showUiElements]);

  useLayoutEffect(() => {
    applyImageSizing();
  }, [applyImageSizing]);

  useLayoutEffect(() => {
    window.addEventListener('resize', applyImageSizing);

    return () => window.removeEventListener('resize', applyImageSizing);
  }, [applyImageSizing]);

  if (!src) return null;

  return (
    <CanvasLayerMaskImageBox
      data-layer-type={type}
      style={
        {
          '--layer-img-zindex': zindex,
          '--layer-img-translate-x': `${x}px`,
          '--layer-img-translate-y': `${y}px`,
        } as React.CSSProperties
      }
    >
      <LayerMaskImage
        alt=""
        ref={imageRef}
        src={src}
        loading="eager"
        className={className}
        crossOrigin="anonymous"
        draggable={false}
      />
    </CanvasLayerMaskImageBox>
  );
}
