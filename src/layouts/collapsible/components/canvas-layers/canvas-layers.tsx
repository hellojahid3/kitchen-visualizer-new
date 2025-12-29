import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { layerOrders, splashbackToolbarUid, visualLayerIndex } from '@/lib/constants';
import type { Position } from '@/types';
import { getCurrentSelection, getSplashbackMaskUrl } from '../../utils';
import { CanvasLayerMaskImage } from '../canvas-layer-mask-image';
import { CanvasLayersWrapper } from './canvas-layers.styled';

type CanvasLayersProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
  globalOffset: Position;
};

export const CanvasLayers = ({ canvasLayersRef, globalOffset }: CanvasLayersProps) => {
  const kitchen = useSelector((state: RootState) => state.kitchen);
  const visualizerState = useSelector((state: RootState) => state.visualizer);

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
        const selection = getCurrentSelection(visualizerState.selections, layer);
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

      {visualizerState.selections[splashbackToolbarUid] && (
        <CanvasLayerMaskImage
          key={visualizerState.selections[splashbackToolbarUid]?.id}
          canvasLayersRef={canvasLayersRef}
          src={getSplashbackMaskUrl(
            visualizerState.selections[splashbackToolbarUid],
            visualizerState.selectedSplashbackVariant
          )}
          zindex={visualLayerIndex.splashbacks}
          type={`splashbacks-${visualizerState.selectedSplashbackVariant}`}
          x={globalOffset.x}
          y={globalOffset.y}
        />
      )}
    </CanvasLayersWrapper>
  );
};
