import * as React from 'react';

import { Button } from '@/components/button';
import { IconEdit } from '@/components/icons/icon-edit';
import { LayoutSidebarHeaderContent } from '../styles';

type LayoutSidebarHeaderProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
};

export default function LayoutSidebarHeader({ canvasLayersRef }: LayoutSidebarHeaderProps) {
  const handleSaveProjectModalOpen = (isOpen: boolean) => {};

  const handleSelectedComponentsModalOpen = (isOpen: boolean) => {};

  const handleStartOver = () => {};

  return (
    <LayoutSidebarHeaderContent>
      <Button leftIcon={<IconEdit />}>Start Over</Button>
    </LayoutSidebarHeaderContent>
  );
}
