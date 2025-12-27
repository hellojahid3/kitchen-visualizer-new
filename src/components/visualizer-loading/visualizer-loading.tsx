import { IconLoadingSpinner } from './icon-loading-spinner';
import {
  Container,
  ContentBlock,
  InnerContainer,
  LoadingContainer,
  LoadingIcon,
  Title,
  VisualizerName,
  VisualizerType,
} from './visualizer-loading.styled';

export type VisualizerLoadingProps = {
  visualizerType?: '2D' | '3D';
  visualizerName?: string;
};

export const VisualizerLoading = ({
  visualizerType = '2D',
  visualizerName = 'Visualizer',
}: VisualizerLoadingProps) => {
  return (
    <Container>
      <InnerContainer>
        <ContentBlock>
          <Title>
            <VisualizerType>{visualizerType}</VisualizerType>
            <br />
            <VisualizerName>{visualizerName}</VisualizerName>
          </Title>
          <LoadingContainer>
            <LoadingIcon className="kv-loading">
              <IconLoadingSpinner size={24} />
            </LoadingIcon>
          </LoadingContainer>
        </ContentBlock>
      </InnerContainer>
    </Container>
  );
};
