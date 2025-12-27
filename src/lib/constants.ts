/**
 * Layer Orders
 */
export const layerOrders = [
  'floor',
  'worktop',
  'wallCabinet',
  'crownMolding',
  'appliance',
  'splashback',
  'baseCabinet',
  'islandCabinet',
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
