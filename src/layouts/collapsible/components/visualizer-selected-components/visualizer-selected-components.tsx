import type { CSSProperties } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store';
import { Button } from '@/components/ui/button';
import { Popup } from '@/components/ui/popup';
import { IconLoadingSpinner } from '@/components/visualizer-loading/icon-loading-spinner';
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
  VisualizerSelectedComponentsLoadingContainer,
  VisualizerSelectedComponentsLoadingIcon,
} from './visualizer-selected-components.styled';

export type VisualizerSelectedComponentsProps = {
  open: boolean;
  onClose: () => void;
  onProjectSavePopupOpen: () => void;
  loadingProjectImage: boolean;
  projectImageUrl: string;
};

export const VisualizerSelectedComponents = ({
  open,
  onClose,
  onProjectSavePopupOpen,
  loadingProjectImage,
  projectImageUrl,
}: VisualizerSelectedComponentsProps) => {
  const selections = useSelector((state: RootState) => state.visualizer.selections);

  return (
    <Popup
      isOpen={open}
      onClose={onClose}
      title="Your Selections"
      description="A summary of the materials curated for your project."
      maxWidth="md"
    >
      {loadingProjectImage ? (
        <VisualizerSelectedComponentsLoadingContainer>
          <VisualizerSelectedComponentsLoadingIcon>
            <IconLoadingSpinner size={48} />
          </VisualizerSelectedComponentsLoadingIcon>
        </VisualizerSelectedComponentsLoadingContainer>
      ) : (
        <>
          <ProjectPreviewImageWrapper>
            <ProjectPreviewImage
              src={projectImageUrl}
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
        </>
      )}

      <Button
        type="submit"
        style={
          {
            '--kv-button-width': '100%',
            '--kv-button-padding': '0.875rem',
          } as CSSProperties
        }
        onClick={onProjectSavePopupOpen}
        disabled={loadingProjectImage}
      >
        Request My Summary
      </Button>
    </Popup>
  );
};
