import * as React from 'react';
import styled from 'styled-components';

import { cn } from '@/lib/utils';

type CanvasLayerMaskImageProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
  imageSrc: string;
  imageZIndex: number;
  imageClassName?: string;
  positionX?: number;
  positionY?: number;
  layerType?: string;
};

const LayerMaskImageWrapper = styled.div`
  --layer-img-scale: 1;
  --layer-img-opacity: 1;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(var(--layer-img-scale, 1))
    translate(var(--layer-img-translate-x, 0), var(--layer-img-translate-y, 0));
  transition: opacity 0.2s ease-in;
  touch-action: none;
  pointer-events: none;
  opacity: var(--layer-img-opacity, 1);
  z-index: var(--layer-img-zindex, 10);
`;

const LayerMaskImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--layer-img-width, 100%);
  height: var(--layer-img-height, auto);
  object-fit: contain;
  user-select: none;
  pointer-events: auto;
  transform: translate(-50%, -50%);
`;

export default function CanvasLayerMaskImage({
  canvasLayersRef,
  imageSrc,
  imageZIndex,
  imageClassName,
  layerType = 'default',
  positionX = 0,
  positionY = 0,
}: CanvasLayerMaskImageProps) {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const imageRef = React.useRef<HTMLImageElement | null>(null);

  const handleWindowResize = React.useCallback(() => {
    if (imageRef.current && canvasLayersRef.current) {
      const containerWidth = canvasLayersRef.current.clientWidth;
      const containerHeight = canvasLayersRef.current.clientHeight;

      const imageAspectRatio = 16 / 9;
      const containerAspectRatio = containerWidth / containerHeight;

      let newWidth: number;
      let newHeight: number;

      if (imageAspectRatio > containerAspectRatio) {
        newWidth = containerWidth;
        newHeight = Math.round(containerWidth / imageAspectRatio);
      } else {
        newHeight = containerHeight;
        newWidth = Math.round(containerHeight * imageAspectRatio);
      }

      imageRef.current.style.setProperty('--layer-img-width', `${newWidth}px`);
      imageRef.current.style.setProperty('--layer-img-height', `${newHeight}px`);
    }
  }, [canvasLayersRef]);

  React.useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      handleWindowResize();
    }
  }, [isMounted, handleWindowResize]);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  if (!imageSrc) {
    return null;
  }

  return (
    <LayerMaskImageWrapper
      data-layer-type={layerType}
      style={
        {
          '--layer-img-zindex': imageZIndex,
          '--layer-img-translate-x': `${positionX}px`,
          '--layer-img-translate-y': `${positionY}px`,
        } as React.CSSProperties
      }
    >
      <LayerMaskImage
        ref={imageRef}
        src={imageSrc}
        loading="eager"
        className={cn(imageClassName)}
        crossOrigin="anonymous"
        alt=""
      />
    </LayerMaskImageWrapper>
  );
}
