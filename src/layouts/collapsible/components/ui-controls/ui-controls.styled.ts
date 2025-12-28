import styled from 'styled-components';

export const UIControlsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  bottom: 2rem;
  right: 5.5rem;
  z-index: 999;
`;

export const UIControlCollapsibleGroup = styled.div<{ $expanded: boolean }>`
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

export const UIControlBtn = styled.button`
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

export const UIControlToggleBtn = styled(UIControlBtn)<{ $expanded: boolean }>`
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

export const UIControlToggleIcon = styled.div<{ $rotated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
  transform: ${props => (props.$rotated ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const UIControlUnifiedBar = styled.div<{ $expanded: boolean }>`
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
