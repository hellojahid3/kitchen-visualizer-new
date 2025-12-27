import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { IconChevronLeft } from '@/components/icons/icon-chevron-left';
import { setIsPanMode } from '@/features/visualizer/visualizerSlice';
import ControlButton from './ControlButton';
import {
  UIControlCollapsibleGroup,
  UIControlsWrapper,
  UIControlToggleBtn,
  UIControlToggleIcon,
  UIControlUnifiedBar,
} from './UIControls.styled';

type UIControlsProps = {
  resetView: () => void;
  handleZoom: (newScale: number, newOffset?: { x: number; y: number }) => void;
  scale: number;
};

export default function UIControls({ resetView, handleZoom, scale }: UIControlsProps) {
  const dispatch = useDispatch();
  const [uiControlsGroup, setUiControlsGroup] = useState(false);
  const isPanMode = useSelector((state: RootState) => state.visualizer.isPanMode);

  const onToggle = () => {
    dispatch(setIsPanMode(!isPanMode));
  };

  const handleZoomIn = () => {
    handleZoom(scale * 1.1);
  };

  const handleZoomOut = () => {
    handleZoom(scale / 1.1);
  };

  return (
    <UIControlsWrapper>
      <UIControlUnifiedBar $expanded={uiControlsGroup}>
        <UIControlCollapsibleGroup $expanded={uiControlsGroup}>
          <ControlButton
            onClick={onToggle}
            aria-label="Toggle pan mode"
            isActive={isPanMode}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>
          </ControlButton>

          <ControlButton
            onClick={handleZoomOut}
            aria-label="Zoom out"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </ControlButton>

          <ControlButton
            onClick={handleZoomIn}
            aria-label="Zoom in"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </ControlButton>

          <ControlButton
            onClick={resetView}
            aria-label="Reset zoom and positions"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </ControlButton>
        </UIControlCollapsibleGroup>

        <UIControlToggleBtn
          $expanded={uiControlsGroup}
          onClick={() => setUiControlsGroup(!uiControlsGroup)}
        >
          <UIControlToggleIcon $rotated={uiControlsGroup}>
            <IconChevronLeft
              width="20"
              height="20"
            />
          </UIControlToggleIcon>
        </UIControlToggleBtn>
      </UIControlUnifiedBar>
    </UIControlsWrapper>
  );
}
