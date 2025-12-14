import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { KitchenComponents, Selection, Toolbar } from '@/types';

export interface VisualizerState {
  components: KitchenComponents;
  selections: Selection;
  toolbars: Toolbar[];
}

const initialState: VisualizerState = {
  components: {
    stones: [],
    styles: [],
    colours: [],
    worktops: [],
    splashbacks: [],
    baseCabinets: [],
    islandCabinets: [],
    wallCabinets: [],
    floors: [],
    crownMoldings: [],
    appliances: [],
    hostpots: [],
  },
  selections: {
    stone: null,
    style: null,
    colour: null,
    worktop: null,
    splashback: null,
    splashbackVariant: 'None',
    baseCabinet: null,
    islandCabinet: null,
    wallCabinet: null,
    floor: null,
    crownMolding: null,
    appliance: null,
  },
  toolbars: [],
};

export const visualizerSlice = createSlice({
  name: 'visualizer',
  initialState,
  reducers: {
    setComponents: (state, action: PayloadAction<Partial<VisualizerState['components']>>) => {
      state.components = {
        ...state.components,
        ...action.payload,
      };
    },
    setToolbars: (state, action: PayloadAction<VisualizerState['toolbars']>) => {
      state.toolbars = action.payload;
    },
    setSelections: (state, action: PayloadAction<Partial<VisualizerState['selections']>>) => {
      state.selections = {
        ...state.selections,
        ...action.payload,
      };
    },
  },
});

export const { setComponents, setToolbars, setSelections } = visualizerSlice.actions;

export default visualizerSlice.reducer;
