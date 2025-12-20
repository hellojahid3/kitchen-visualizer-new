import { type ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';

interface ControlButtonProps {
  isActive?: boolean;
}

const ControlButtonStyled = styled.button<ControlButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  padding: 0.5rem;
  color: #374151;
  background-color: #ffffff;
  border-radius: 9999px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }

  &[data-active='true'] {
    background-color: #bfdbfe;
  }
`;

const ControlButton = forwardRef<HTMLButtonElement, ControlButtonProps & ComponentProps<'button'>>(
  ({ isActive, ...props }, ref) => {
    return (
      <ControlButtonStyled
        data-active={isActive}
        ref={ref}
        {...props}
      />
    );
  }
);

export default ControlButton;
