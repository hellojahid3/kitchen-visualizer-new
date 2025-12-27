import {
  Description,
  Dialog as HeadlessUIDialog,
  DialogPanel as HeadlessUIDialogPanel,
  DialogTitle as HeadlessUIDialogTitle,
} from '@headlessui/react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const widths = {
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
};

export const Dialog = styled(HeadlessUIDialog)`
  position: relative;
  z-index: var(--kv-modal-z-index);
`;

export const DialogOverlay = styled(motion.div)`
  inset: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--kv-modal-backdrop-rgb), var(--kv-modal-backdrop-opacity));
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const DialogContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  padding: 1rem;
  overflow-y: auto;
`;

export const CenteredPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 1rem;
`;

export const DialogPanel = styled(HeadlessUIDialogPanel)<{ $maxWidth: string }>`
  width: 100%;
  max-width: ${props => {
    return widths[props.$maxWidth as keyof typeof widths];
  }};
  overflow: hidden;
  border-radius: var(--kv-modal-border-radius);
  background-color: rgb(var(--kv-modal-bg-rgb));
  padding: var(--kv-modal-padding);
  text-align: left;
  align-items: center;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(var(--kv-modal-blur));
  -webkit-backdrop-filter: blur(var(--kv-modal-blur));
`;

export const DialogHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const DialogTitle = styled(HeadlessUIDialogTitle)`
  font-family: var(--kv-font-serif), serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2em;
  color: rgb(var(--kv-modal-title-color));
`;

export const DialogSubtitle = styled(Description)`
  font-size: 0.8rem;
  line-height: 1.25;
  color: rgb(var(--kv-modal-subtitle-color));
  margin-bottom: 0;
`;

export const DialogCloseButton = styled.button`
  appearance: none;
  border-radius: 0.375rem;
  background-color: transparent;
  color: #9ca3af;
  border: none;
  cursor: pointer;

  &:hover {
    color: #4b5563;
  }
`;

export const DialogContent = styled.div`
  font-size: var(--body-font-size);
  font-weight: var(--body-font-weight);
  line-height: var(--body-line-height);
  color: var(--color-text);
`;
