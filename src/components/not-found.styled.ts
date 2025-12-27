import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--kv-body-background));
  height: 100%;
  padding: 0 1rem;
  z-index: 999;
`;

export const NotFoundImage = styled.img`
  width: 450px;
  max-width: 100%;
  height: auto;
  margin-top: -3.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const NotFoundSubtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #313131;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const NotFoundDescription = styled.p`
  font-size: 1rem;
  color: #313131;
  text-align: center;
`;
