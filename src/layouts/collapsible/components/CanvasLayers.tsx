import * as React from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { visualLayerIndex } from '@/lib/constants';
import type { Position } from '@/types';
import { CanvasLayersWrapper } from '../styles';
import CanvasLayerMaskImage from './CanvasLayerMaskImage';

type CanvasLayersProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
  globalOffset: Position;
};

export default function CanvasLayers({ canvasLayersRef, globalOffset }: CanvasLayersProps) {
  const kitchen = useSelector((state: RootState) => state.kitchen);
  const visualizer = useSelector((state: RootState) => state.visualizer);

  return (
    <CanvasLayersWrapper ref={canvasLayersRef}>
      {kitchen.backgroundImageUrl && (
        <CanvasLayerMaskImage
          canvasLayersRef={canvasLayersRef}
          imageSrc={kitchen.backgroundImageUrl}
          imageZIndex={visualLayerIndex.backgroundImage}
          layerType="default"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}

      {visualizer.selections.worktop?.maskImageUrl && (
        <CanvasLayerMaskImage
          key={visualizer.selections.worktop.id}
          canvasLayersRef={canvasLayersRef}
          imageSrc={visualizer.selections.worktop.maskImageUrl}
          imageZIndex={visualLayerIndex.worktop}
          layerType="worktop"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}

      {/* TODO: Add splashback */}

      {visualizer.selections.baseCabinet?.maskImageUrl && (
        <CanvasLayerMaskImage
          key={visualizer.selections.baseCabinet.id}
          canvasLayersRef={canvasLayersRef}
          imageSrc={visualizer.selections.baseCabinet.maskImageUrl}
          imageZIndex={visualLayerIndex.baseCabinet}
          layerType="baseCabinet"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}

      {visualizer.selections.islandCabinet?.maskImageUrl && (
        <CanvasLayerMaskImage
          key={visualizer.selections.islandCabinet.id}
          canvasLayersRef={canvasLayersRef}
          imageSrc={visualizer.selections.islandCabinet.maskImageUrl}
          imageZIndex={visualLayerIndex.islandCabinet}
          layerType="islandCabinet"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}

      {visualizer.selections.wallCabinet?.maskImageUrl && (
        <CanvasLayerMaskImage
          key={visualizer.selections.wallCabinet.id}
          canvasLayersRef={canvasLayersRef}
          imageSrc={visualizer.selections.wallCabinet.maskImageUrl}
          imageZIndex={visualLayerIndex.wallCabinet}
          layerType="wallCabinet"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}

      {visualizer.selections.floor?.maskImageUrl && (
        <CanvasLayerMaskImage
          key={visualizer.selections.floor.id}
          canvasLayersRef={canvasLayersRef}
          imageSrc={visualizer.selections.floor.maskImageUrl}
          imageZIndex={visualLayerIndex.floor}
          layerType="floor"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}

      {visualizer.selections.crownMolding?.maskImageUrl && (
        <CanvasLayerMaskImage
          key={visualizer.selections.crownMolding.id}
          canvasLayersRef={canvasLayersRef}
          imageSrc={visualizer.selections.crownMolding.maskImageUrl}
          imageZIndex={visualLayerIndex.crownMolding}
          layerType="crownMolding"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}

      {visualizer.selections.appliance?.maskImageUrl && (
        <CanvasLayerMaskImage
          key={visualizer.selections.appliance.id}
          canvasLayersRef={canvasLayersRef}
          imageSrc={visualizer.selections.appliance.maskImageUrl}
          imageZIndex={visualLayerIndex.appliance}
          layerType="appliance"
          positionX={globalOffset.x}
          positionY={globalOffset.y}
        />
      )}
    </CanvasLayersWrapper>
  );
}
