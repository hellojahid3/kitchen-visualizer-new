import styled from 'styled-components';

const Container = styled.div`
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

const NotFoundImage = styled.img`
  width: 450px;
  max-width: 100%;
  height: auto;
  margin-top: -3.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const NotFoundSubtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #313131;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const NotFoundDescription = styled.p`
  font-size: 1rem;
  color: #313131;
  text-align: center;
`;

export default function NotFound() {
  return (
    <Container>
      <NotFoundImage
        src="/images/not-found.svg"
        alt="Not Found"
      />
      <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
      <NotFoundDescription>
        The page you are looking for does not exist. Please check the URL and try again.
      </NotFoundDescription>
    </Container>
  );
}
