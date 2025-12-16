import { Button } from '@/components/button';
import { IconEdit } from '@/components/icons/icon-edit';
import { LayoutSidebarHeaderContent } from '../styles';

export default function LayoutSidebarHeader() {
  return (
    <LayoutSidebarHeaderContent>
      <Button leftIcon={<IconEdit />}>Start Over</Button>
    </LayoutSidebarHeaderContent>
  );
}
