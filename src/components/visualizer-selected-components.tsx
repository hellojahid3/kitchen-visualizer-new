import type { CSSProperties } from 'react';
import styled from 'styled-components';

import { Button } from './button';
import { Popup } from './popup';

const ProjectPreviewImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #f7f7f7;
  border-radius: 0.875rem;
  margin-bottom: 1rem;
`;

const ProjectPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.875rem;
`;

const ComponentItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const ComponentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 0.875rem;
  background: #fafaf9;
`;

const ComponentImg = styled.div`
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

const ComponentInfo = styled.div`
  flex-grow: 1;
`;

const ComponentInfoTitle = styled.div`
  display: block;
  font-size: 9px;
  font-weight: 600;
  color: rgb(var(--kv-color-accent));
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const ComponentInfoDescription = styled.div`
  font-family: var(--kv-font-serif), serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 600;
`;

const ComponentItemEditBtn = styled.button`
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

type VisualizerSelectedComponentsProps = {
  open: boolean;
  onClose: () => void;
};

export default function VisualizerSelectedComponents({
  open,
  onClose,
}: VisualizerSelectedComponentsProps) {
  return (
    <Popup
      isOpen={open}
      onClose={onClose}
      title="Your Selections"
      description="A summary of the materials curated for your project."
      maxWidth="md"
    >
      <ProjectPreviewImageWrapper>
        <ProjectPreviewImage
          src=""
          alt="Kitchen Preview Image"
        />
      </ProjectPreviewImageWrapper>

      <ComponentItemList>
        <ComponentItem>
          <ComponentImg>
            <img
              src=""
              alt="Cabinet Sample"
            />
          </ComponentImg>
          <ComponentInfo>
            <ComponentInfoTitle>Cabinet</ComponentInfoTitle>
            <ComponentInfoDescription>Maple Wood - Natural Finish</ComponentInfoDescription>
          </ComponentInfo>
          <ComponentItemEditBtn>Edit</ComponentItemEditBtn>
        </ComponentItem>

        <ComponentItem>
          <ComponentImg>
            <img
              src=""
              alt="Cabinet Sample"
            />
          </ComponentImg>
          <ComponentInfo>
            <ComponentInfoTitle>Cabinet</ComponentInfoTitle>
            <ComponentInfoDescription>Maple Wood - Natural Finish</ComponentInfoDescription>
          </ComponentInfo>
          <ComponentItemEditBtn>Edit</ComponentItemEditBtn>
        </ComponentItem>

        <ComponentItem>
          <ComponentImg>
            <img
              src=""
              alt="Cabinet Sample"
            />
          </ComponentImg>
          <ComponentInfo>
            <ComponentInfoTitle>Cabinet</ComponentInfoTitle>
            <ComponentInfoDescription>Maple Wood - Natural Finish</ComponentInfoDescription>
          </ComponentInfo>
          <ComponentItemEditBtn>Edit</ComponentItemEditBtn>
        </ComponentItem>
      </ComponentItemList>

      <Button
        type="submit"
        style={
          {
            '--kv-button-width': '100%',
            '--kv-button-padding': '0.875rem',
          } as CSSProperties
        }
      >
        Request My Summary
      </Button>
    </Popup>
  );
}
