import * as React from 'react';
import * as htmlToImage from 'html-to-image';

type UseScreenshotBase64Props = {
  type?: string;
  quality?: number;
  skipFonts?: boolean;
};

export const useScreenshotBase64 = ({
  type = 'image/png',
  quality = 1,
  skipFonts = true,
}: UseScreenshotBase64Props) => {
  const [isCapturing, setIsCapturing] = React.useState(false);
  const [image, setImage] = React.useState<Blob | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const takeScreenShot = React.useCallback(
    (node: HTMLElement) => {
      if (!node) {
        throw new Error('You should provide correct html node.');
      }

      (async () => {
        try {
          setIsCapturing(true);
          const dataUrl = await htmlToImage.toBlob(node, { type, quality, skipFonts });
          setImage(dataUrl);
          setIsCapturing(false);

          return dataUrl;
        } catch (error: unknown) {
          setError(error as Error);
          setIsCapturing(false);

          return null;
        }
      })();
    },
    [type, quality, skipFonts]
  );

  const resetScreenshot = React.useCallback(() => {
    setImage(null);
  }, []);

  return {
    image,
    error,
    isCapturing,
    takeScreenShot,
    resetScreenshot,
  };
};
