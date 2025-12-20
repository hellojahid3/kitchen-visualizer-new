import styled from 'styled-components';

import { Popup } from './popup';

const ProjectPreviewImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 0.125rem;
  margin-bottom: 1rem;
`;

const ProjectPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.125rem;
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
      title="Save Project"
      description="We'll send you an email with all the selected components and a preview image of your kitchen."
      maxWidth="md"
    >
      <ProjectPreviewImageWrapper>
        <ProjectPreviewImage
          src=""
          alt="Kitchen Preview Image"
        />
      </ProjectPreviewImageWrapper>
    </Popup>
  );
}
