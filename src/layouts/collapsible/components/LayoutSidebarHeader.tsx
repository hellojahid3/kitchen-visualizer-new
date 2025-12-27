import { useState } from 'react';

import { Button } from '@/components/button';
import { IconDownload } from '@/components/icons/icon-download';
import { IconEdit } from '@/components/icons/icon-edit';
import ProjectSavePopup from '@/components/project-save-popup';
import VisualizerSelectedComponents from '@/components/visualizer-selected-components';
import { LayoutSidebarHeaderContent } from './LayoutSidebarHeader.styled';

export default function LayoutSidebarHeader() {
  const [isSelectedComponentsOpen, setIsSelectedComponentsOpen] = useState(false);
  const [isProjectSavePopupOpen, setIsProjectSavePopupOpen] = useState(false);

  const handleSelectedComponentsPopupOpen = () => {
    setIsSelectedComponentsOpen(true);
    setIsProjectSavePopupOpen(false);
  };

  const handleSelectedComponentsPopupClose = () => {
    setIsSelectedComponentsOpen(false);
    setIsProjectSavePopupOpen(false);
  };

  const handleProjectSavePopupOpen = () => {
    setIsProjectSavePopupOpen(true);
    setIsSelectedComponentsOpen(false);
  };

  const handleProjectSavePopupClose = () => {
    setIsProjectSavePopupOpen(false);
    setIsSelectedComponentsOpen(false);
  };

  return (
    <LayoutSidebarHeaderContent>
      <Button>
        <IconEdit width="18" />
        Start Over
      </Button>
      <Button onClick={handleSelectedComponentsPopupOpen}>
        <IconEdit width="18" />
        Summery
      </Button>
      <Button onClick={handleProjectSavePopupOpen}>
        <IconDownload width="18" />
      </Button>

      <VisualizerSelectedComponents
        open={isSelectedComponentsOpen}
        onClose={handleSelectedComponentsPopupClose}
      />

      <ProjectSavePopup
        open={isProjectSavePopupOpen}
        onClose={handleProjectSavePopupClose}
      />
    </LayoutSidebarHeaderContent>
  );
}
