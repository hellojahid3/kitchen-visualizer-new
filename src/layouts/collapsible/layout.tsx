import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { setKitchen } from '@/features/kitchen/kitchenSlice';
import { setComponents, setToolbars } from '@/features/visualizer/visualizerSlice';
import type { Kitchen, Position } from '@/types';
import CanvasLayers from './components/CanvasLayers';
import LayoutSidebarContent from './components/LayoutSidebarContent';
import LayoutSidebarHeader from './components/LayoutSidebarHeader';
import UIControls from './components/UIControls';
import UIToggleControl from './components/UIToggleControl';
import { useContainerSize } from './hook/use-container-size';
import { useNonPassiveWheel } from './hook/use-non-passive-wheel';
import { usePan } from './hook/use-pan';
import { useZoom } from './hook/use-zoom';
import { VIEWPORT_CONFIG } from './config';
import {
  Canvas,
  CanvasWrapper,
  LayoutContent,
  LayoutContentInner,
  LayoutContentInnerWrapper,
  LayoutContentWrapper,
  LayoutSidebar,
  LayoutWrapper,
} from './styles';

type VisualizerCollapsibleLayoutProps = {
  data: Kitchen;
};

export default function VisualizerCollapsibleLayout({ data }: VisualizerCollapsibleLayoutProps) {
  const dispatch = useDispatch();
  const visualizer = useSelector((state: RootState) => state.visualizer);
  const canvasRef = React.useRef<HTMLDivElement>(null);
  const canvasLayersRef = React.useRef<HTMLDivElement>(null);
  const containerSize = useContainerSize(canvasRef);

  const calculateMaxOffsets = React.useCallback(
    (currentScale: number): Position => ({
      x:
        (containerSize.width * (currentScale - 1)) / (2 * currentScale) +
        VIEWPORT_CONFIG.extensionLimit,
      y:
        (containerSize.height * (currentScale - 1)) / (2 * currentScale) +
        VIEWPORT_CONFIG.extensionLimit,
    }),
    [containerSize]
  );

  const { scale, globalOffset, handleZoom, resetView } = useZoom({ calculateMaxOffsets });

  const { isDragging, handlePointerDown, handlePointerMove, handlePointerUp } = usePan({
    scale,
    isPanMode: visualizer.isPanMode,
    onPan: handleZoom,
    globalOffset,
  });

  React.useEffect(() => {
    const { toolbars, components, ...kitchenInfo } = data;

    dispatch(setKitchen(kitchenInfo));
    dispatch(setToolbars(toolbars));
    dispatch(setComponents(components));
  }, [data, dispatch]);

  const handleWheel = React.useCallback(
    (e: WheelEvent) => {
      if (!visualizer.isPanMode) return;

      e.preventDefault();
      const delta = -e.deltaY;
      const zoomFactor = 1.1;
      const newScale = delta > 0 ? scale * zoomFactor : scale / zoomFactor;

      handleZoom(newScale);
    },
    [visualizer.isPanMode, scale, handleZoom]
  );

  useNonPassiveWheel(canvasRef, handleWheel);

  return (
    <LayoutWrapper>
      <React.Activity mode={visualizer.showUiElements ? 'visible' : 'hidden'}>
        <LayoutSidebar>
          <LayoutSidebarHeader canvasLayersRef={canvasLayersRef} />
          <LayoutSidebarContent />
        </LayoutSidebar>
      </React.Activity>

      <LayoutContentWrapper>
        <LayoutContent>
          <LayoutContentInner>
            <LayoutContentInnerWrapper>
              <UIToggleControl />

              <CanvasWrapper>
                <Canvas
                  ref={canvasRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  style={
                    {
                      '--transform-scale': scale,
                      '--canvas-cursor': isDragging || visualizer.isPanMode ? 'grab' : 'default',
                    } as React.CSSProperties
                  }
                >
                  <CanvasLayers
                    canvasLayersRef={canvasLayersRef}
                    globalOffset={globalOffset}
                  />
                </Canvas>
              </CanvasWrapper>

              <React.Activity mode={visualizer.showUiElements ? 'visible' : 'hidden'}>
                <UIControls
                  resetView={resetView}
                  handleZoom={handleZoom}
                  scale={scale}
                />
              </React.Activity>
            </LayoutContentInnerWrapper>
          </LayoutContentInner>
        </LayoutContent>
      </LayoutContentWrapper>
    </LayoutWrapper>
  );
}
