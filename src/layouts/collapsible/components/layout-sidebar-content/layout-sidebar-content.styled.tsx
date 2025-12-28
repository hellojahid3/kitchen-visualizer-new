import styled, { css } from 'styled-components';

export const SidebarContentWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SidebarContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 1.75rem;
  padding-bottom: 1rem;
  padding-left: 1.75rem;
`;

export const SidebarItemWrapper = styled.div<{ $active: boolean }>`
  border-radius: var(--kv-card-border-radius);
  border: 1px solid ${props => (props.$active ? 'rgba(197, 160, 89, 0.3)' : 'rgba(0, 0, 0, 0.03)')};
  background: ${props => (props.$active ? '#fff' : 'rgb(var(--kv-card-bg-rgb))')};
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;
`;

export const SidebarItemTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  outline: none;
`;

export const SidebarItemTriggerImageBox = styled.div<{ $color: string | null; $hide?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: var(--kv-card-border-radius);
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  background: ${props => props.$color || 'transparent'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  ${SidebarItemTrigger}:hover & img {
    transform: scale(1.15);
  }

  ${props =>
    props.$hide &&
    css`
      transform: scale(0.6) translateX(-20px);
      opacity: 0;
      width: 0;
      margin-right: -10px;
    `}
`;

export const SidebarItemTriggerImage = styled.img`
  width: 100%;
  height: 100px;
  max-width: 100%;
  object-fit: cover;
`;

export const SidebarItemTriggerContentBox = styled.div<{ $shifted?: boolean }>`
  margin-left: ${props => (props.$shifted ? '8px' : '16px')};
  flex-grow: 1;
  transition: margin-left 0.5s ease;
`;

export const SidebarItemTriggerLabel = styled.span`
  display: block;
  font-size: 10px;
  font-weight: 600;
  color: rgb(var(--kv-color-secondary));
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 2px;
`;

export const SidebarItemTriggerText = styled.h3<{ $active?: boolean }>`
  font-family: var(--kv-font-serif);
  font-weight: 500;
  font-size: 1.1rem;
  color: ${props => (props.$active ? 'var(--kv-color-accent)' : 'var(--kv-color-text)')};
  font-style: italic;
  transition: color 0.3s ease;
`;

export const SidebarItemTriggerIcon = styled.div<{ $rotated?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.$rotated ? 'rgb(var(--kv-color-accent))' : 'rgb(var(--kv-color-secondary))'};
  transition: transform 0.3s ease;
  transform: rotate(${props => (props.$rotated ? '90deg' : '0deg')});
  opacity: 0.5;
`;

export const SidebarItemContent = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${props => (props.$isOpen ? '1fr' : '0fr')};
  transition:
    grid-template-rows 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
`;

export const SidebarItemContentInner = styled.div<{ $isOpen: boolean }>`
  padding: ${props => (props.$isOpen ? '0 20px 16px 20px' : '0')};
  overflow: hidden;
  transition: padding 0.5s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const SidebarItemContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const SidebarItemContentGridOption = styled.div<{ $selected?: boolean }>`
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid ${props => (props.$selected ? 'rgb(var(--kv-color-accent))' : 'transparent')};
  background: ${props => (props.$selected ? '#fffefb' : 'transparent')};
  box-shadow: ${props => (props.$selected ? '0 8px 20px rgba(197, 160, 89, 0.08)' : 'none')};
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  text-align: center;

  &:hover {
    background: #faf9f6;
  }
`;

export const SidebarItemContentGridOptionImage = styled.div<{ $color: string | null }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  background: ${props => props.$color || 'transparent'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${SidebarItemContentGridOption}:hover & img {
    transform: scale(1.08);
  }
`;

export const SidebarItemContentGridOptionName = styled.span`
  font-family: var(--kv-font-serif);
  font-size: 13px;
  font-style: italic;
  color: var(--kv-color-text);
`;
