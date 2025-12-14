import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Kitchen } from '@/types';

export const kitchenApi = createApi({
  reducerPath: 'kitchenApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_KITCHEN_DATA_URL }),
  tagTypes: ['Kitchen'],
  endpoints: builder => ({
    getKitchen: builder.query<Kitchen, { subdomain: string; kitchenId: string }>({
      query: ({ subdomain, kitchenId }) => `/${subdomain}/${kitchenId}/data.json`,
      providesTags: (_result, _error, { subdomain, kitchenId }) => [
        { type: 'Kitchen', id: `${subdomain}-${kitchenId}` },
      ],
    }),
  }),
});

export const { useGetKitchenQuery } = kitchenApi;
