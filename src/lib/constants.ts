import { IconFullHeightSplashback } from '@/components/icons/icon-fullheight-splashback';
import { IconHobSplashback } from '@/components/icons/icon-hob-splashback';
import { IconNoSplashback } from '@/components/icons/icon-no-splashback';
import { IconUpstandSplashback } from '@/components/icons/icon-upstand-splashback';

/**
 * Layer Orders
 */
export const layerOrders = [
  'floors',
  'worktops',
  'wallCabinets',
  'crownMoldings',
  'appliances',
  'baseCabinets',
  'islandCabinets',
];

export const visualLayerIndex = Object.fromEntries(
  layerOrders.map((layer, index) => [layer, index])
);

/**
 * Splashback Toolbar UID
 */
export const splashbackToolbarUid = 'splashbacks';

/**
 * Splashback Variants
 */
export const splashbackVariants = {
  fullHeight: 'Full Height Splashback',
  hob: 'Hob Splashback',
  upstand: 'Upstand',
  none: 'No Splashback',
};

/**
 * Splashback Variant Icons
 */
export const splashbackVariantIcons = {
  fullHeight: IconFullHeightSplashback,
  hob: IconHobSplashback,
  upstand: IconUpstandSplashback,
  none: IconNoSplashback,
};
