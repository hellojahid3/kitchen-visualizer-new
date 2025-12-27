import { Button } from '@/components/ui/button';
import {
  ErrorButtonGroup,
  ErrorCentered,
  ErrorHeading,
  ErrorInner,
  ErrorMessage,
  ErrorWrapper,
} from './visualizer-error.styled';

export type VisualizerErrorProps = {
  onRetry?: () => void;
  title?: string;
  message?: string;
};

export const VisualizerError = ({
  onRetry,
  title = 'Error',
  message = "We can't load the visualizer right now, there is something wrong. Please try again later.",
}: VisualizerErrorProps) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ErrorWrapper>
      <ErrorInner>
        <ErrorCentered>
          <ErrorHeading>{title}</ErrorHeading>
          <ErrorMessage>{message}</ErrorMessage>
          <ErrorButtonGroup>
            {onRetry && <Button onClick={onRetry}>Try Again &rarr;</Button>}
            <Button
              onClick={handleRefresh}
              style={
                {
                  '--button-bg': '#6b7280',
                  '--button-hover-bg': '#4b5563',
                } as React.CSSProperties
              }
            >
              Refresh Page
            </Button>
          </ErrorButtonGroup>
        </ErrorCentered>
      </ErrorInner>
    </ErrorWrapper>
  );
};
