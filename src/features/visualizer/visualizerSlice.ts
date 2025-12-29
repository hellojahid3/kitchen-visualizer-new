import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Hostpot, KitchenComponents, Selection, Toolbar } from '@/types';
import { kitchenApi } from '../kitchen/kitchenApi';

export interface VisualizerState {
  isPanMode: boolean;
  showUiElements: boolean;
  openProjectSave: boolean;
  openSelectedComponents: boolean;
  components: KitchenComponents;
  toolbars: Toolbar[];
  hostpots: Hostpot[];
  selections: Selection;
  selectedSplashbackVariant: string;
  openedAccordionId: string | null;
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
  },
  toolbars: [],
  hostpots: [],
  selections: {
    stones: null,
    styles: null,
    colours: null,
    worktops: null,
    splashbacks: null,
    baseCabinets: null,
    islandCabinets: null,
    wallCabinets: null,
    floors: null,
    crownMoldings: null,
    appliances: null,
  },
  selectedSplashbackVariant: 'None',
  openedAccordionId: null,
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
    setHostpots: (state, action: PayloadAction<VisualizerState['hostpots']>) => {
      state.hostpots = action.payload;
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
    openAccordion: (state, action: PayloadAction<string>) => {
      state.openedAccordionId = action.payload;
    },
    toggleAccordion: (state, action: PayloadAction<string>) => {
      state.openedAccordionId = state.openedAccordionId === action.payload ? null : action.payload;
    },
    setSelectedSplashbackVariant: (state, action: PayloadAction<string>) => {
      state.selectedSplashbackVariant = action.payload;
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
  setHostpots,
  openAccordion,
  toggleAccordion,
  setSelections,
  setIsPanMode,
  setShowUiElements,
  setOpenProjectSave,
  setOpenSelectedComponents,
  setSelectedSplashbackVariant,
} = visualizerSlice.actions;

export default visualizerSlice.reducer;
