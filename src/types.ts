declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type Position = {
  x: number;
  y: number;
};

export type Toolbar = {
  id: string;
  uid: string;
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
  maskImageUrl?: string;
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
};

export type KitchenInfo = {
  id: string;
  name: string;
  shape: string;
  description: string;
  backgroundImageUrl: string;
  thumbnailUrl: string;
  gaMeasurementId?: string;
  companyName: string;
  companyLogoUrl: string;
  companyWebsiteUrl: null;
};

export type Kitchen = KitchenInfo & {
  toolbars: Toolbar[];
  components: KitchenComponents;
};

export type Selection = {
  stones: Component | null;
  styles: Component | null;
  colours: Component | null;
  worktops: Component | null;
  splashbacks: Splashback | null;
  baseCabinets: Component | null;
  islandCabinets: Component | null;
  wallCabinets: Component | null;
  floors: Component | null;
  crownMoldings: Component | null;
  appliances: Component | null;
};
