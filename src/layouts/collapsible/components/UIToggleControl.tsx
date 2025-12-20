import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import type { RootState } from '@/app/store';
import { setShowUiElements } from '@/features/visualizer/visualizerSlice';

const UIToggleControlButton = styled.button`
  appearance: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  border: none;
  border-radius: 9999px;
  padding: 0.5rem;
  color: #374151;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
  }

  &:focus {
    outline: none;
    ring: 2px solid rgba(37, 99, 235, 1);
  }
`;

export default function UIToggleControl() {
  const dispatch = useDispatch();
  const { showUiElements } = useSelector((state: RootState) => state.visualizer);

  const handleUIElementsToggle = () => {
    dispatch(setShowUiElements(!showUiElements));
  };

  return (
    <UIToggleControlButton
      onClick={handleUIElementsToggle}
      aria-label={showUiElements ? 'Hide interface' : 'Show interface'}
      title={showUiElements ? 'Hide interface' : 'Show interface'}
    >
      {!showUiElements ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line
            x1="1"
            y1="1"
            x2="23"
            y2="23"
          ></line>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle
            cx="12"
            cy="12"
            r="3"
          ></circle>
        </svg>
      )}
    </UIToggleControlButton>
  );
}
