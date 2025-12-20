import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    min-height: auto;
  }
`;

export const LayoutSidebarWrapper = styled.aside`
  background-color: #fff;
  width: 25%;
  height: 100%;
  min-width: 400px;
  max-width: 380px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 992px) {
    width: 100%;
    max-width: none;
    min-width: 0;
  }
`;

export const LayoutSidebar = styled.aside`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const LayoutSidebarHeaderContent = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #ffffff;
  padding-bottom: 1rem;
  padding-top: 1.75rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  z-index: 998;
`;

export const LayoutContentWrapper = styled.main`
  background-color: #f3f4f6;
  width: 75%;
  height: 100%;
  flex: 1 1 0;
  box-sizing: border-box;

  @media (max-width: 992px) {
    width: 100%;
    max-width: none;
    min-width: 0;
  }
`;

export const LayoutContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const LayoutContentInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background-color: #e5e7eb;
`;

export const LayoutContentInnerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
`;

export const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
`;

export const Canvas = styled.div`
  --canvas-cursor: default;
  --transform-scale: 1;
  --transform-translate-x: 0px;
  --transform-translate-y: 0px;

  cursor: var(--canvas-cursor, default);
  width: 100%;
  height: 100%;
  transform: scale(var(--transform-scale, 1))
    translate(var(--transform-translate-x, 0), var(--transform-translate-y, 0));
  transform-origin: center center;
  transition: transform 0.2s ease-in-out;
  will-change: transform, translate;
  touch-action: none;
`;

export const CanvasLayersWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
