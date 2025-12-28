import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { layerOrders, visualLayerIndex } from '@/lib/constants';
import type { Position, Selection } from '@/types';
import { CanvasLayerMaskImage } from '../canvas-layer-mask-image';
import { CanvasLayersWrapper } from './canvas-layers.styled';

type CanvasLayersProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
  globalOffset: Position;
};

export const CanvasLayers = ({ canvasLayersRef, globalOffset }: CanvasLayersProps) => {
  const kitchen = useSelector((state: RootState) => state.kitchen);
  const selections = useSelector((state: RootState) => state.visualizer.selections);

  return (
    <CanvasLayersWrapper ref={canvasLayersRef}>
      {kitchen.backgroundImageUrl && (
        <CanvasLayerMaskImage
          canvasLayersRef={canvasLayersRef}
          src={kitchen.backgroundImageUrl}
          zindex={visualLayerIndex.backgroundImage}
          type="default"
          x={globalOffset.x}
          y={globalOffset.y}
        />
      )}

      {layerOrders.map(layer => {
        const selection = selections[layer as keyof Selection];
        if (!selection?.maskImageUrl) return null;

        return (
          <CanvasLayerMaskImage
            key={selection.id}
            canvasLayersRef={canvasLayersRef}
            src={selection.maskImageUrl}
            zindex={visualLayerIndex[layer]}
            type={layer}
            x={globalOffset.x}
            y={globalOffset.y}
          />
        );
      })}
    </CanvasLayersWrapper>
  );
};
