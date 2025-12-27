import type { CSSProperties } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { Button } from './button';
import { Popup } from './popup';
import {
  ComponentImg,
  ComponentInfo,
  ComponentInfoDescription,
  ComponentInfoTitle,
  ComponentItem,
  ComponentItemEditBtn,
  ComponentItemList,
  ProjectPreviewImage,
  ProjectPreviewImageWrapper,
} from './visualizer-selected-components.styled';

type VisualizerSelectedComponentsProps = {
  open: boolean;
  onClose: () => void;
};

export default function VisualizerSelectedComponents({
  open,
  onClose,
}: VisualizerSelectedComponentsProps) {
  const selections = useSelector((state: RootState) => state.visualizer.selections);

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
        {Object.entries(selections).map(([key, selection]) =>
          selection?.thumbnailUrl ? (
            <ComponentItem key={key}>
              <ComponentImg>
                <img
                  src={selection.thumbnailUrl}
                  alt={key}
                />
              </ComponentImg>
              <ComponentInfo>
                <ComponentInfoTitle>{key}</ComponentInfoTitle>
                <ComponentInfoDescription>{selection.name}</ComponentInfoDescription>
              </ComponentInfo>
              <ComponentItemEditBtn>Edit</ComponentItemEditBtn>
            </ComponentItem>
          ) : null
        )}
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
