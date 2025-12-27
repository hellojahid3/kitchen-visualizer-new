import { createBrowserRouter } from 'react-router';

import { NotFound } from '@/components/not-found';
import { VisualizerLoading } from '@/components/visualizer-loading';
import Visualizer from '@/pages/visualizer';

export const router = createBrowserRouter([
  {
    path: '/:subdomain',
    errorElement: <NotFound />,
    children: [
      {
        path: ':kitchenId',
        hydrateFallbackElement: <VisualizerLoading />,
        element: <Visualizer />,
      },
    ],
  },
]);

export default router;
