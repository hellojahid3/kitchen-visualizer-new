import { useDispatch, useSelector } from 'react-redux';

import { type RootState } from '@/app/store';
import { IconChevronRight } from '@/components/icons/icon-chevron-right';
import {
  setSelectedSplashbackVariant,
  setSelections,
  toggleAccordion,
} from '@/features/visualizer/visualizerSlice';
import { splashbackToolbarUid, splashbackVariantIcons, splashbackVariants } from '@/lib/constants';
import type { Component, Splashback } from '@/types';
import { getCurrentSelection, getFirstSplashback, getSelectionItems } from '../../utils';
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
} from './layout-sidebar-content.styled';

export const LayoutSidebarContent = () => {
  const dispatch = useDispatch();
  const visualizerState = useSelector((state: RootState) => state.visualizer);

  const handleToggleAccordion = (toolbarUid: string) => {
    return () => {
      dispatch(toggleAccordion(toolbarUid));
    };
  };

  const handleSelectSplashbackVariant = (variant: string) => {
    return () => {
      dispatch(setSelectedSplashbackVariant(variant));
      dispatch(
        setSelections({
          splashbacks: getFirstSplashback(visualizerState.components.splashbacks),
        })
      );
    };
  };

  const handleSelectSelection = (toolbarUid: string, selection: Component | Splashback) => {
    return () => {
      dispatch(
        setSelections({
          [toolbarUid]: selection,
        })
      );
    };
  };

  return (
    <SidebarContentWrapper>
      <SidebarContentInner>
        {visualizerState.toolbars.map(toolbar => {
          const isOpen = visualizerState.openedAccordionId === toolbar.uid;
          const isSplashback = toolbar.uid === splashbackToolbarUid;
          const currentSelection = getCurrentSelection(visualizerState.selections, toolbar.uid);
          const selectionItems = getSelectionItems(visualizerState.components, toolbar.uid);

          return (
            <SidebarItemWrapper
              key={toolbar.uid}
              $active={isOpen}
            >
              <SidebarItemTrigger onClick={handleToggleAccordion(toolbar.uid)}>
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
                <SidebarItemTriggerIcon $rotated={isOpen}>
                  <IconChevronRight size={18} />
                </SidebarItemTriggerIcon>
              </SidebarItemTrigger>
              <SidebarItemContent $isOpen={isOpen}>
                <SidebarItemContentInner $isOpen={isOpen}>
                  <SidebarItemContentGrid>
                    {isSplashback
                      ? Object.entries(splashbackVariants).map(([key, name]) => {
                          const isSelected = visualizerState.selectedSplashbackVariant === key;
                          const IconComponent =
                            splashbackVariantIcons[key as keyof typeof splashbackVariantIcons];

                          return (
                            <SidebarItemContentGridOption
                              key={key}
                              $selected={isSelected}
                              onClick={handleSelectSplashbackVariant(key)}
                            >
                              <SidebarItemContentGridOptionImage $color={null}>
                                <IconComponent
                                  size={80}
                                  color="rgb(var(--kv-color-accent))"
                                />
                              </SidebarItemContentGridOptionImage>
                              <SidebarItemContentGridOptionName>
                                {name}
                              </SidebarItemContentGridOptionName>
                            </SidebarItemContentGridOption>
                          );
                        })
                      : selectionItems.map(item => {
                          const isSelected = currentSelection?.id === item.id;

                          return (
                            <SidebarItemContentGridOption
                              key={item.id}
                              $selected={isSelected}
                              onClick={handleSelectSelection(toolbar.uid, item)}
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
};
