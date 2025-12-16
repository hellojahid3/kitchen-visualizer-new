import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setKitchen } = kitchenSlice.actions;

export default kitchenSlice.reducer;
