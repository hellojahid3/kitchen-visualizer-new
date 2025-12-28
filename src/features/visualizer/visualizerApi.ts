import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type SaveProjectMutationArgs = {
  subdomain: string;
  kitchenId: string;
  formData: FormData;
};

export const visualizerApi = createApi({
  reducerPath: 'visualizerApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Visualizer'],
  endpoints: builder => ({
    saveProject: builder.mutation<void, SaveProjectMutationArgs>({
      query: args => ({
        url: `/${args.subdomain}/${args.kitchenId}/projects`,
        method: 'POST',
        body: args.formData,
      }),
    }),
  }),
});

export const { useSaveProjectMutation } = visualizerApi;
