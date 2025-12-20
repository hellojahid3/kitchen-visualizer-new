import { useState } from 'react';

import { Button } from '@/components/button';
import { IconEdit } from '@/components/icons/icon-edit';
import ProjectSavePopup from '@/components/project-save-popup';
import { LayoutSidebarHeaderContent } from '../styles';

export default function LayoutSidebarHeader() {
  const [isProjectSavePopupOpen, setIsProjectSavePopupOpen] = useState(false);

  return (
    <LayoutSidebarHeaderContent>
      <Button leftIcon={<IconEdit />}>Start Over</Button>
      <Button
        leftIcon={<IconEdit />}
        onClick={() => setIsProjectSavePopupOpen(true)}
      >
        Save Project
      </Button>

      <ProjectSavePopup
        open={isProjectSavePopupOpen}
        onClose={() => setIsProjectSavePopupOpen(false)}
      />
    </LayoutSidebarHeaderContent>
  );
}
