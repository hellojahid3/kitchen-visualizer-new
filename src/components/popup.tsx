import { type ReactNode } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { IconX } from './icons/icon-x';

const StyledDialog = styled(Dialog)`
  position: relative;
  z-index: var(--kv-modal-z-index);
`;

const Overlay = styled(motion.div)`
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

const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  padding: 1rem;
  overflow-y: auto;
`;

const CenteredPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 1rem;
`;

const Panel = styled(DialogPanel)<{ $maxWidth: string }>`
  width: 100%;
  max-width: ${props => {
    const widths = {
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
    };

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

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled(DialogTitle)`
  font-family: var(--kv-font-serif), serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2em;
  color: rgb(var(--kv-modal-title-color));
`;

const Subtitle = styled(Description)`
  font-size: 0.8rem;
  line-height: 1.25;
  color: rgb(var(--kv-modal-subtitle-color));
  margin-bottom: 0;
`;

const CloseButton = styled.button`
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

const Content = styled.div`
  font-size: var(--body-font-size);
  font-weight: var(--body-font-weight);
  line-height: var(--body-line-height);
  color: var(--color-text);
`;

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Popup = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'md',
}: PopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledDialog
          open
          onClose={onClose}
        >
          <Overlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <Container>
            <CenteredPanel>
              <Panel
                as={motion.div}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                $maxWidth={maxWidth}
              >
                <HeaderWrapper>
                  <Header>
                    {title && <Title>{title}</Title>}
                    {description && <Subtitle>{description}</Subtitle>}
                  </Header>

                  <CloseButton
                    type="button"
                    onClick={onClose}
                  >
                    <IconX
                      width="20"
                      height="20"
                    />
                  </CloseButton>
                </HeaderWrapper>

                <Content>{children}</Content>
              </Panel>
            </CenteredPanel>
          </Container>
        </StyledDialog>
      )}
    </AnimatePresence>
  );
};
