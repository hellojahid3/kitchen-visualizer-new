import styled from 'styled-components';

export const CanvasLayerMaskImageBox = styled.div`
  --layer-img-scale: 1;
  --layer-img-opacity: 1;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(var(--layer-img-scale, 1))
    translate(var(--layer-img-translate-x, 0), var(--layer-img-translate-y, 0));
  transition: opacity 0.2s ease-in;
  touch-action: none;
  pointer-events: none;
  opacity: var(--layer-img-opacity, 1);
  z-index: var(--layer-img-zindex, 0);
`;

export const LayerMaskImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--layer-img-width, 100%);
  height: var(--layer-img-height, auto);
  object-fit: contain;
  user-select: none;
  pointer-events: auto;
  transform: translate(-50%, -50%);
`;
