import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--kv-body-background));
  height: 100%;
  padding: 1rem;
  z-index: 999;
`;

export const ErrorInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ErrorCentered = styled.div`
  text-align: center;
  max-width: 500px;
`;

export const ErrorHeading = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  color: #e5e7eb;

  @media (min-width: 768px) {
    font-size: 9rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.3em;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ErrorButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;
