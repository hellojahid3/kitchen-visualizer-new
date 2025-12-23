import styled, { keyframes } from 'styled-components';

type VisualizerLoadingProps = {
  visualizerType?: '2D' | '3D';
  visualizerName?: string;
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--kv-body-background));
  height: 100%;
  padding: 0 1rem;
  z-index: 999;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ContentBlock = styled.div`
  display: block;
  color: inherit;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 3rem;
  font-weight: 900;
  color: #e5e7eb;
  margin: 0 !important;
`;

const VisualizerType = styled.span`
  font-size: 1.5rem;
  text-align: left;
  font-style: italic;
`;

const VisualizerName = styled.span`
  text-align: center;
`;

const LoadingContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: #6b7280;
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  position: relative;
  z-index: 999;
  width: 1.5em;
  height: 1.5em;
  color: inherit;
  display: inline-flex;
  animation: loading 1s linear infinite;

  svg {
    will-change: transform;
    width: 1.5em;
    height: 1.5em;
    animation: 0.6s linear infinite ${loadingAnimation};
  }
`;

export default function VisualizerLoading({
  visualizerType = '2D',
  visualizerName = 'Visualizer',
}: VisualizerLoadingProps) {
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
              <svg
                viewBox="0 0 36 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-icon="spin"
              >
                <defs>
                  <linearGradient
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="linearGradient-1"
                  >
                    <stop
                      stopColor="currentColor"
                      stopOpacity="0"
                      offset="0%"
                    ></stop>
                    <stop
                      stopColor="currentColor"
                      stopOpacity="0.50"
                      offset="39.9430698%"
                    ></stop>
                    <stop
                      stopColor="currentColor"
                      offset="100%"
                    ></stop>
                  </linearGradient>
                </defs>
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <rect
                    fillOpacity="0.01"
                    fill="none"
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                  ></rect>
                  <path
                    d="M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951"
                    stroke="url(#linearGradient-1)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
            </LoadingIcon>
          </LoadingContainer>
        </ContentBlock>
      </InnerContainer>
    </Container>
  );
}
