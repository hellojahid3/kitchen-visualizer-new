import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import type { RootState } from '@/app/store';
import { IconChevronLeft } from '@/components/icons/icon-chevron-left';
import { setIsPanMode } from '@/features/visualizer/visualizerSlice';
import ControlButton from './ControlButton';

const ControlsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  bottom: 2rem;
  right: 5.5rem;
  z-index: 999;
`;

const UnifiedControlBar = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  background: rgb(var(--kv-body-background));
  border: 1px solid
    ${props => (props.$expanded ? 'rgba(var(--kv-color-accent), 0.3)' : 'rgba(0, 0, 0, 0.08)')};
  border-radius: 100px;
  padding: 4px;
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: ${props =>
    props.$expanded
      ? '0 10px 25px rgba(var(--kv-color-accent), 0.1)'
      : '0 4px 12px rgba(0,0,0,0.02)'};
  z-index: 999;
`;

const CollapsibleGroup = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: ${props => (props.$expanded ? '250px' : '0')};
  opacity: ${props => (props.$expanded ? '1' : '0')};
  margin-right: ${props => (props.$expanded ? '0.5rem' : '0')};
  transition:
    max-width 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease ${props => (props.$expanded ? '0.2s' : '0s')};
  overflow: hidden;
`;

const ControlBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background: none;
  color: rgb(var(--kv-color-accent));
  border: none;
  border-radius: 999px;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    color: rgb(var(--kv-color-accent));
    background: rgba(var(--kv-color-accent), 0.04);
  }
`;

const ToggleBtn = styled(ControlBtn)<{ $expanded: boolean }>`
  color: rgb(var(--kv-color-accent));
  font-weight: 600;
  padding: 0.5rem;
  justify-content: center;
  border: 1px solid ${props => (props.$expanded ? 'rgb(var(--kv-color-accent))' : 'transparent')};
  border-radius: 50%;

  &:hover {
    background: #ffffff;
    border: 1px solid rgb(var(--kv-color-accent));
  }
`;

const ToggleIcon = styled.div<{ $rotated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
  transform: ${props => (props.$rotated ? 'rotate(180deg)' : 'rotate(0)')};
`;

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
    <ControlsWrapper>
      <UnifiedControlBar $expanded={uiControlsGroup}>
        <CollapsibleGroup $expanded={uiControlsGroup}>
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
        </CollapsibleGroup>

        <ToggleBtn
          $expanded={uiControlsGroup}
          onClick={() => setUiControlsGroup(!uiControlsGroup)}
        >
          <ToggleIcon $rotated={uiControlsGroup}>
            <IconChevronLeft
              width="20"
              height="20"
            />
          </ToggleIcon>
        </ToggleBtn>
      </UnifiedControlBar>
    </ControlsWrapper>
  );
}
