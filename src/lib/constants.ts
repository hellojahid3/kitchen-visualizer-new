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
 * Splashback Types
 */
export const splashbackTypes = {
  hob: 'Hob Splashback',
  fullHeight: 'Full Height Splashback',
  upstand: 'Upstand',
  none: 'No Splashback',
};
