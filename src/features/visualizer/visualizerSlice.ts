import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { KitchenComponents, Selection, Toolbar } from '@/types';
import { kitchenApi } from '../kitchen/kitchenApi';

export interface VisualizerState {
  isPanMode: boolean;
  showUiElements: boolean;
  openProjectSave: boolean;
  openSelectedComponents: boolean;
  components: KitchenComponents;
  selections: Selection;
  toolbars: Toolbar[];
}

const initialState: VisualizerState = {
  isPanMode: false,
  showUiElements: true,
  openProjectSave: false,
  openSelectedComponents: false,
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
    setIsPanMode: (state, action: PayloadAction<boolean>) => {
      state.isPanMode = action.payload;
    },
    setShowUiElements: (state, action: PayloadAction<boolean>) => {
      state.showUiElements = action.payload;
    },
    setOpenProjectSave: (state, action: PayloadAction<boolean>) => {
      state.openProjectSave = action.payload;
    },
    setOpenSelectedComponents: (state, action: PayloadAction<boolean>) => {
      state.openSelectedComponents = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(kitchenApi.endpoints.getKitchen.matchFulfilled, (state, action) => {
      return {
        ...state,
        components: action.payload.components,
        toolbars: action.payload.toolbars,
      };
    });
  },
});

export const {
  setComponents,
  setToolbars,
  setSelections,
  setIsPanMode,
  setShowUiElements,
  setOpenProjectSave,
  setOpenSelectedComponents,
} = visualizerSlice.actions;

export default visualizerSlice.reducer;
