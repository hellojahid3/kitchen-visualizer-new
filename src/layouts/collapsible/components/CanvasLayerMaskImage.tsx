import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { cn } from '@/lib/utils';
import { VIEWPORT_CONFIG } from '../config';
import { CanvasLayerMaskImageBox, LayerMaskImage } from './CanvasLayerMaskImage.styled';

type CanvasLayerMaskImageProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
  imageSrc: string;
  imageZIndex: number;
  imageClassName?: string;
  positionX?: number;
  positionY?: number;
  layerType?: string;
};

export default function CanvasLayerMaskImage({
  canvasLayersRef,
  imageSrc,
  imageZIndex,
  imageClassName,
  layerType = 'default',
  positionX = 0,
  positionY = 0,
}: CanvasLayerMaskImageProps) {
  const showUiElements = useSelector((state: RootState) => state.visualizer.showUiElements);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleWindowResize = useCallback(() => {
    if (imageRef.current && canvasLayersRef.current) {
      if (showUiElements) {
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

        imageRef.current.style.setProperty('--layer-img-height', `${newHeight}px`);
        imageRef.current.style.setProperty('--layer-img-width', `${newWidth}px`);
      } else {
        imageRef.current.style.setProperty('--layer-img-height', 'auto');
        imageRef.current.style.setProperty(
          '--layer-img-width',
          `calc(100% - ${VIEWPORT_CONFIG.fullscreenExtension}px)`
        );
      }
    }
  }, [canvasLayersRef, showUiElements]);

  useEffect(() => {
    handleWindowResize();
  }, [handleWindowResize, showUiElements]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  if (!imageSrc) {
    return null;
  }

  return (
    <CanvasLayerMaskImageBox
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
    </CanvasLayerMaskImageBox>
  );
}
