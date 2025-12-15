import styled from 'styled-components';

const PreloadImagesWrapper = styled.div`
  position: absolute;
  display: none;
  top: -9999px;
  left: -9999px;
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
`;

type PreloadImagesProps = {
  urls: string[];
};

export default function PreloadImages({ urls }: PreloadImagesProps) {
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
}
