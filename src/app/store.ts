import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { kitchenApi } from '@/features/kitchen/kitchenApi';
import { kitchenSlice } from '@/features/kitchen/kitchenSlice';
import { visualizerApi } from '@/features/visualizer/visualizerApi';
import { visualizerSlice } from '@/features/visualizer/visualizerSlice';

const rootReducer = combineSlices(kitchenSlice, kitchenApi, visualizerSlice, visualizerApi);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(kitchenApi.middleware, visualizerApi.middleware),
    preloadedState,
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
