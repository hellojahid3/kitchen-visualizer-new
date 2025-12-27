import styled from 'styled-components';

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
  height: 200px;
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
  color: #000000;
  background-color: rgb(var(--kv-project-preview-bg));
  padding: 1rem;
  border-radius: 0.125rem;
`;

export const ProjectSaveErrorIcon = styled.div`
  display: block;
  color: #f93d5c;
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
