import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { kitchenApi } from './kitchenApi';

export interface KitchenState {
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
}

const initialState: KitchenState = {
  id: '',
  name: '',
  shape: '',
  description: '',
  backgroundImageUrl: '',
  thumbnailUrl: '',
  gaMeasurementId: '',
  companyName: '',
  companyLogoUrl: '',
  companyWebsiteUrl: null,
};

export const kitchenSlice = createSlice({
  name: 'kitchen',
  initialState,
  reducers: {
    setKitchen: (state, action: PayloadAction<Partial<KitchenState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addMatcher(kitchenApi.endpoints.getKitchen.matchFulfilled, (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        shape: action.payload.shape,
        description: action.payload.description,
        backgroundImageUrl: action.payload.backgroundImageUrl,
        thumbnailUrl: action.payload.thumbnailUrl,
        gaMeasurementId: action.payload.gaMeasurementId,
        companyName: action.payload.companyName,
        companyLogoUrl: action.payload.companyLogoUrl,
        companyWebsiteUrl: action.payload.companyWebsiteUrl,
      };
    });
  },
});

export const { setKitchen } = kitchenSlice.actions;

export default kitchenSlice.reducer;
