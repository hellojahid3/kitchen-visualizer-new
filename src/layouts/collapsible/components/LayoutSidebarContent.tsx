import ProjectSavePopup from '@/components/project-save-popup';

export default function LayoutSidebarContent() {
  return (
    <div>
      <ProjectSavePopup
        open={false}
        onClose={() => {}}
      />
    </div>
  );
}
