import { type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { IconX } from '../../icons/icon-x';
import {
  CenteredPanel,
  Dialog,
  DialogCloseButton,
  DialogContainer,
  DialogContent,
  DialogHeader,
  DialogHeaderWrapper,
  DialogOverlay,
  DialogPanel,
  DialogSubtitle,
  DialogTitle,
} from './popup.styled';

export type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

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
        <Dialog
          open
          onClose={onClose}
        >
          <DialogOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <DialogContainer>
            <CenteredPanel>
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                $maxWidth={maxWidth}
              >
                <DialogHeaderWrapper>
                  <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {description && <DialogSubtitle>{description}</DialogSubtitle>}
                  </DialogHeader>
                  <DialogCloseButton
                    type="button"
                    onClick={onClose}
                  >
                    <IconX
                      width="20"
                      height="20"
                    />
                  </DialogCloseButton>
                </DialogHeaderWrapper>
                <DialogContent>{children}</DialogContent>
              </DialogPanel>
            </CenteredPanel>
          </DialogContainer>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
