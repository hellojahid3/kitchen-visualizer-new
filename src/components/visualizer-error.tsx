import styled from 'styled-components';

import { Button } from './button';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  padding: 1rem;
  z-index: 999;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextCenter = styled.div`
  text-align: center;
  max-width: 500px;
`;

const ErrorHeading = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  color: #e5e7eb;

  @media (min-width: 768px) {
    font-size: 9rem;
  }
`;

const ErrorMessage = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.3em;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

interface VisualizerErrorProps {
  onRetry?: () => void;
  title?: string;
  message?: string;
}

export default function VisualizerError({
  onRetry,
  title = 'Error',
  message = "We can't load the visualizer right now, there is something wrong. Please try again later.",
}: VisualizerErrorProps) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container>
      <CenterWrapper>
        <TextCenter>
          <ErrorHeading>{title}</ErrorHeading>
          <ErrorMessage>{message}</ErrorMessage>
          <ButtonGroup>
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
          </ButtonGroup>
        </TextCenter>
      </CenterWrapper>
    </Container>
  );
}
