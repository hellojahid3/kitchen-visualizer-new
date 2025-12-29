import styled, { keyframes } from 'styled-components';

export const ProjectSaveForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ProjectPreviewImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 200px;
  background-color: rgb(var(--kv-project-preview-bg));
  border-radius: 0.875rem;
  margin-bottom: 1rem;
`;

export const ProjectPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.875rem;
`;

export const ProjectSaveErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #ffffff;
  background-color: #f93d5c;
  padding: 1rem;
  border-radius: 0.125rem;
`;

export const ProjectSaveErrorIcon = styled.div`
  display: block;
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1em;
  margin-top: -0.25rem;
  margin-right: 0.25rem;
`;

export const ProjectSaveErrorMessage = styled.p`
  font-size: 0.875rem;
  line-height: 1.4em;
  margin-bottom: 0;
`;

export const ProjectSaveSuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #155724;
  background-color: #d4edda;
  padding: 1rem;
  border-radius: 0.125rem;
`;

export const ProjectSaveSuccessIcon = styled.div`
  display: block;
  color: #155724;
  font-size: 1.25rem;
  line-height: 1em;
  margin-top: -0.25rem;
  margin-right: 0.25rem;
`;

export const ProjectSaveSuccessMessage = styled.p`
  font-size: 0.875rem;
  line-height: 1.4em;
  margin-bottom: 0;
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ProjectSaveLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export const ProjectSaveLoadingIcon = styled.div`
  display: inline-flex;
  color: currentColor;

  svg {
    animation: ${loadingAnimation} 0.6s linear infinite;
  }
`;
