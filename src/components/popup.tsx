import { type ReactNode } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { IconX } from './icons/icon-x';

const StyledDialog = styled(Dialog)`
  position: relative;
  z-index: 9999999;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
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
  padding: 2rem;
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
  transform: scale(1);
  overflow: hidden;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.5rem;
  text-align: left;
  align-items: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  &[data-closed] {
    transform: scale(0.95);
    opacity: 0;
  }
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
  gap: 0.25rem;
`;

const Title = styled(DialogTitle)`
  font-family: var(--font-heading), serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2em;
  color: #111827;
`;

const Subtitle = styled(Description)`
  font-size: 0.875rem;
  line-height: 1.25;
  color: #6b7280;
  margin-bottom: 0;
`;

const CloseButton = styled.button`
  appearance: none;
  border-radius: 0.375rem;
  background-color: white;
  color: #9ca3af;
  border: none;
  cursor: pointer;

  &:hover {
    color: #4b5563;
  }
`;

const Content = styled.div`
  font-size: 0.925rem;
  font-weight: 400;
  line-height: 1.5;
  color: #374151;
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
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
