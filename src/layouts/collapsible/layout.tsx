import { Activity, type CSSProperties, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import type { Position } from '@/types';
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
  LayoutSidebarWrapper,
  LayoutWrapper,
} from './styles';

export default function VisualizerCollapsibleLayout() {
  const visualizer = useSelector((state: RootState) => state.visualizer);
  const canvasRef = useRef<HTMLDivElement>(null);
  const canvasLayersRef = useRef<HTMLDivElement>(null);
  const containerSize = useContainerSize(canvasRef);

  const calculateMaxOffsets = useCallback(
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

  const handleWheel = useCallback(
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
      <Activity mode={visualizer.showUiElements ? 'visible' : 'hidden'}>
        <LayoutSidebarWrapper>
          <LayoutSidebar>
            <LayoutSidebarHeader />
            <LayoutSidebarContent />
          </LayoutSidebar>
        </LayoutSidebarWrapper>
      </Activity>

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
                    } as CSSProperties
                  }
                >
                  <CanvasLayers
                    canvasLayersRef={canvasLayersRef}
                    globalOffset={globalOffset}
                  />
                </Canvas>
              </CanvasWrapper>

              <Activity mode={visualizer.showUiElements ? 'visible' : 'hidden'}>
                <UIControls
                  resetView={resetView}
                  handleZoom={handleZoom}
                  scale={scale}
                />
              </Activity>
            </LayoutContentInnerWrapper>
          </LayoutContentInner>
        </LayoutContent>
      </LayoutContentWrapper>
    </LayoutWrapper>
  );
}
