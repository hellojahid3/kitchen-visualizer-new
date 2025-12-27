import styled from 'styled-components';

export const ProjectPreviewImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: rgb(var(--kv-project-preview-bg));
  border-radius: 0.875rem;
  margin-bottom: 1rem;
`;

export const ProjectPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.875rem;
`;

export const ComponentItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const ComponentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 12px;
  border-radius: 0.875rem;
  background: rgb(var(--kv-project-preview-bg));
`;

export const ComponentImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
  background: transparent;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ComponentInfo = styled.div`
  flex-grow: 1;
`;

export const ComponentInfoTitle = styled.div`
  display: block;
  font-size: 9px;
  font-weight: 600;
  color: rgb(var(--kv-color-accent));
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

export const ComponentInfoDescription = styled.div`
  font-family: var(--kv-font-serif), serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 600;
`;

export const ComponentItemEditBtn = styled.button`
  background: none;
  border: 1px solid #eee;
  color: rgb(var(--kv-color-text));
  padding: 8px 12px;
  border-radius: 0.75rem;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: rgb(var(--kv-color-accent));
    color: rgb(var(--kv-button-hover-color-rgb));
    background: rgb(var(--kv-button-color-rgb));
  }
`;
