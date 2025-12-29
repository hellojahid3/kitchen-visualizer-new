import type { KitchenComponents, Selection, Splashback } from '@/types';

export const getCurrentSelection = (selections: Selection, toolbarUid: string) => {
  return selections[toolbarUid as keyof Selection] || null;
};

export const getSelectionItems = (components: KitchenComponents, toolbarUid: string) => {
  return components[toolbarUid as keyof KitchenComponents] || [];
};

export const getFirstSplashback = (selections: Splashback[]) => {
  return selections?.[0] || null;
};

export const getSplashbackMaskUrl = (splashback: Splashback, variant: string): string => {
  switch (variant) {
    case 'fullHeight':
      return splashback.fullHeightMaskUrl;
    case 'hob':
      return splashback.hobMaskUrl;
    case 'upstand':
      return splashback.upstandMaskUrl;
    case 'none':
      return splashback.noneMaskUrl;
    default:
      return splashback.noneMaskUrl;
  }
};
