import {
  NotFoundContainer,
  NotFoundDescription,
  NotFoundImage,
  NotFoundSubtitle,
} from './not-found.styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundImage
        src="/images/not-found.svg"
        alt="Not Found"
      />
      <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
      <NotFoundDescription>
        The page you are looking for does not exist. Please check the URL and try again.
      </NotFoundDescription>
    </NotFoundContainer>
  );
};
