import { useEffect, useMemo, useState } from 'react';

import { IconDownload } from '@/components/icons/icon-download';
import { IconEdit } from '@/components/icons/icon-edit';
import { ProjectSavePopup } from '@/components/project-save-popup';
import { Button } from '@/components/ui/button';
import { VisualizerSelectedComponents } from '../../components/visualizer-selected-components';
import { useScreenshotBase64 } from '../../hook/use-screenshot-base64';
import { LayoutSidebarHeaderContent } from './layout-sidebar-header.styled';

type LayoutSidebarHeaderProps = {
  canvasLayersRef: React.RefObject<HTMLDivElement | null>;
};

export const LayoutSidebarHeader = ({ canvasLayersRef }: LayoutSidebarHeaderProps) => {
  const {
    takeScreenShot,
    isCapturing,
    image: projectImageBlob,
  } = useScreenshotBase64({
    type: 'image/png',
    quality: 1,
    skipFonts: true,
  });

  const [isSelectedComponentsOpen, setIsSelectedComponentsOpen] = useState(false);
  const [isProjectSavePopupOpen, setIsProjectSavePopupOpen] = useState(false);

  const projectImageUrl = useMemo(() => {
    if (!projectImageBlob) return '';

    return URL.createObjectURL(projectImageBlob);
  }, [projectImageBlob]);

  useEffect(() => {
    return () => {
      if (projectImageUrl) {
        URL.revokeObjectURL(projectImageUrl);
      }
    };
  }, [projectImageUrl]);

  const captureScreenshot = () => {
    if (canvasLayersRef.current) {
      takeScreenShot(canvasLayersRef.current);
    }
  };

  const handleSelectedComponentsPopupOpen = () => {
    setIsSelectedComponentsOpen(true);
    setIsProjectSavePopupOpen(false);
    captureScreenshot();
  };

  const handleSelectedComponentsPopupClose = () => {
    setIsSelectedComponentsOpen(false);
    setIsProjectSavePopupOpen(false);
  };

  const handleProjectSavePopupOpen = () => {
    setIsProjectSavePopupOpen(true);
    setIsSelectedComponentsOpen(false);
    captureScreenshot();
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
        onProjectSavePopupOpen={handleProjectSavePopupOpen}
        loadingProjectImage={isCapturing}
        projectImageUrl={projectImageUrl}
      />

      <ProjectSavePopup
        open={isProjectSavePopupOpen}
        onClose={handleProjectSavePopupClose}
        loadingProjectImage={isCapturing}
        projectImageUrl={projectImageUrl}
        projectImageBlob={projectImageBlob}
      />
    </LayoutSidebarHeaderContent>
  );
};
