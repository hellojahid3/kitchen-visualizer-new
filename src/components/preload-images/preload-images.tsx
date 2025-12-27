import { PreloadImagesWrapper } from './preload-images.styled';

export type PreloadImagesProps = {
  urls: string[];
};

export const PreloadImages = ({ urls }: PreloadImagesProps) => {
  return (
    <PreloadImagesWrapper
      aria-hidden="true"
      role="presentation"
    >
      {urls.map((url, index) => (
        <img
          key={index}
          src={url}
          style={{ display: 'none !important' }}
          data-image-type="cache"
          data-image-id={index + 1}
          aria-hidden="true"
          role="presentation"
          loading="eager"
          alt=""
        />
      ))}
    </PreloadImagesWrapper>
  );
};
