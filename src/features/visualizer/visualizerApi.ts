import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type z from 'zod';

import type { projectSchema } from '@/lib/validation';

export const visualizerApi = createApi({
  reducerPath: 'visualizerApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Visualizer'],
  endpoints: builder => ({
    saveProject: builder.mutation<
      void,
      {
        subdomain: string;
        kitchenId: string;
        project: z.infer<typeof projectSchema>;
      }
    >({
      query: ({ subdomain, kitchenId, project }) => {
        const formData = new FormData();
        formData.append('name', project.name);
        formData.append('email', project.email);
        formData.append('phone', project.phone);
        formData.append('zipCode', project.zipCode);
        formData.append('selections', JSON.stringify(project.selections));
        formData.append(
          'image',
          new File([project.image], 'project-image.png', {
            type: project.image.type,
          })
        );

        return {
          url: `/${subdomain}/${kitchenId}/projects`,
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        };
      },
    }),
  }),
});

export const { useSaveProjectMutation } = visualizerApi;
