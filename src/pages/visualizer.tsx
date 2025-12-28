import { useEffect } from 'react';
import { useParams } from 'react-router';

import { VisualizerError } from '@/components/visualizer-error';
import { VisualizerLoading } from '@/components/visualizer-loading';
import { useGetKitchenQuery } from '@/features/kitchen/kitchenApi';
import { VisualizerCollapsibleLayout } from '@/layouts/collapsible/layout';
import { initAnalytics, trackAnalyticEvent, trackAnalyticPageView } from '@/lib/analytics';

type VisualizerPagePrams = {
  subdomain: string;
  kitchenId: string;
};

export default function VisualizerPage() {
  const { subdomain, kitchenId } = useParams<VisualizerPagePrams>();
  const { data, error, isLoading, refetch } = useGetKitchenQuery({
    subdomain: subdomain!,
    kitchenId: kitchenId!,
  });

  useEffect(() => {
    if (data && data.gaMeasurementId) {
      initAnalytics(data.gaMeasurementId, { clientId: `${subdomain}-${kitchenId}` });
      trackAnalyticEvent('Visualizer', 'Loaded', data.name, parseInt(data.id));
      trackAnalyticPageView(window.location.pathname, document.title);
    }
  }, [data, kitchenId, subdomain]);

  if (isLoading) {
    return <VisualizerLoading />;
  }

  if (error || !data) {
    return <VisualizerError onRetry={refetch} />;
  }

  return <VisualizerCollapsibleLayout />;
}
