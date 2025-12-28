import styled from 'styled-components';

export const UIToggleControlButton = styled.button`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 0.5rem;
  color: rgb(var(--kv-color-accent));
  background-color: rgb(var(--kv-body-background));
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 10px 25px rgba(var(--kv-color-accent), 0.1);
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: rgb(var(--kv-color-accent));
    border-color: rgba(var(--kv-color-accent));
  }
`;

export const UIToggleControlWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  background: rgb(var(--kv-body-background));
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  gap: 0.5rem;
  z-index: 999;
`;
