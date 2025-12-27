import { useDispatch, useSelector } from 'react-redux';

import { type RootState } from '@/app/store';
import { IconChevronRight } from '@/components/icons/icon-chevron-right';
import { setSelections, toggleAccordion } from '@/features/visualizer/visualizerSlice';
import {
  SidebarContentInner,
  SidebarContentWrapper,
  SidebarItemContent,
  SidebarItemContentGrid,
  SidebarItemContentGridOption,
  SidebarItemContentGridOptionImage,
  SidebarItemContentGridOptionName,
  SidebarItemContentInner,
  SidebarItemTrigger,
  SidebarItemTriggerContentBox,
  SidebarItemTriggerIcon,
  SidebarItemTriggerImage,
  SidebarItemTriggerImageBox,
  SidebarItemTriggerLabel,
  SidebarItemTriggerText,
  SidebarItemWrapper,
} from './LayoutSidebarContent.styled';

export default function LayoutSidebarContent() {
  const dispatch = useDispatch();
  const toolbars = useSelector((state: RootState) => state.visualizer.toolbars);
  const selections = useSelector((state: RootState) => state.visualizer.selections);
  const components = useSelector((state: RootState) => state.visualizer.components);
  const openedAccordionId = useSelector((state: RootState) => state.visualizer.openedAccordionId);

  return (
    <SidebarContentWrapper>
      <SidebarContentInner>
        {toolbars.map(toolbar => {
          const isOpen = openedAccordionId === toolbar.id;
          const currentSelection = selections[toolbar.uid as keyof typeof selections] || null;
          const selectionItems = components[toolbar.uid as keyof typeof components] || [];

          return (
            <SidebarItemWrapper
              key={toolbar.id}
              $active={isOpen}
            >
              <SidebarItemTrigger
                onClick={() => {
                  dispatch(toggleAccordion(toolbar.id));
                }}
              >
                <SidebarItemTriggerImageBox
                  $hide={isOpen}
                  $color={null}
                >
                  {currentSelection?.thumbnailUrl && (
                    <SidebarItemTriggerImage
                      src={currentSelection.thumbnailUrl}
                      alt={currentSelection.name}
                    />
                  )}
                </SidebarItemTriggerImageBox>
                <SidebarItemTriggerContentBox $shifted={isOpen}>
                  <SidebarItemTriggerLabel>{toolbar.name}</SidebarItemTriggerLabel>
                  <SidebarItemTriggerText $active={isOpen}>
                    {currentSelection?.name || ''}
                  </SidebarItemTriggerText>
                </SidebarItemTriggerContentBox>
                <SidebarItemTriggerIcon rotated={isOpen}>
                  <IconChevronRight size={18} />
                </SidebarItemTriggerIcon>
              </SidebarItemTrigger>
              <SidebarItemContent $isOpen={isOpen}>
                <SidebarItemContentInner $isOpen={isOpen}>
                  <SidebarItemContentGrid>
                    {selectionItems.map(item => {
                      const isSelected = currentSelection?.id === item.id;

                      return (
                        <SidebarItemContentGridOption
                          key={item.id}
                          $selected={isSelected}
                          onClick={() => {
                            dispatch(
                              setSelections({
                                [toolbar.uid]: item,
                              })
                            );
                          }}
                        >
                          <SidebarItemContentGridOptionImage $color={null}>
                            <img
                              src={item.thumbnailUrl}
                              alt={item.name}
                            />
                          </SidebarItemContentGridOptionImage>
                          <SidebarItemContentGridOptionName>
                            {item.name}
                          </SidebarItemContentGridOptionName>
                        </SidebarItemContentGridOption>
                      );
                    })}
                  </SidebarItemContentGrid>
                </SidebarItemContentInner>
              </SidebarItemContent>
            </SidebarItemWrapper>
          );
        })}
      </SidebarContentInner>
    </SidebarContentWrapper>
  );
}
