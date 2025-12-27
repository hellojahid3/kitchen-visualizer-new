import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--kv-body-background));
  height: 100%;
  padding: 0 1rem;
  z-index: 999;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ContentBlock = styled.div`
  display: block;
  color: inherit;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 3rem;
  font-weight: 900;
  color: #e5e7eb;
  margin: 0 !important;
`;

export const VisualizerType = styled.span`
  font-size: 1.5rem;
  text-align: left;
  font-style: italic;
`;

export const VisualizerName = styled.span`
  text-align: center;
`;

export const LoadingContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: #6b7280;
`;

export const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.div`
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
