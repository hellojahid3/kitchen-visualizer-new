export type Toolbar = {
  id: string;
  name: string;
  pluralName: string | null;
  thumbnailUrl: string | null;
  iconId: string;
  sortOrder: number;
};

export type Component = {
  id: string;
  name: string;
  thumbnailUrl: string;
  sortOrder: number;
  isDefault: boolean;
  dependencies: string[] | null;
};

export type Splashback = Component & {
  defaultVariant: string;
  fullHeightMaskUrl: string;
  hobMaskUrl: string;
  upstandMaskUrl: string;
  noneMaskUrl: string;
};

export type Hostpot = {
  id: string;
  label: string;
  target: string;
  positionX: number;
  positionY: number;
};

export type KitchenComponents = {
  stones: Component[];
  styles: Component[];
  colours: Component[];
  worktops: Component[];
  splashbacks: Splashback[];
  baseCabinets: Component[];
  islandCabinets: Component[];
  wallCabinets: Component[];
  floors: Component[];
  crownMoldings: Component[];
  appliances: Component[];
  hostpots: Hostpot[];
};

export type KitchenInfo = {
  id: string;
  name: string;
  shape: string;
  description: string;
  backgroundImageUrl: string;
  thumbnailUrl: string;
  gaMeasurementId?: string;
  company: {
    name: string;
    slug: string;
    logo: string;
  };
};

export type Kitchen = KitchenInfo & {
  toolbars: Toolbar[];
  components: KitchenComponents;
};

export type Selection = {
  stone: Component | null;
  style: Component | null;
  colour: Component | null;
  worktop: Component | null;
  splashback: Splashback | null;
  splashbackVariant: string;
  baseCabinet: Component | null;
  islandCabinet: Component | null;
  wallCabinet: Component | null;
  floor: Component | null;
  crownMolding: Component | null;
  appliance: Component | null;
};
