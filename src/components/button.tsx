import { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';

import { cn } from '@/lib/utils';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--button-gap);
  width: var(--button-width, auto);
  padding: var(--button-padding);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  line-height: var(--button-line-height);
  border: none;
  border-radius: var(--button-border-radius);
  background: var(--button-bg, #3b3937);
  color: var(--button-color, #fff);
  cursor: pointer;
  transition: background 0.2s;

  &:disabled,
  &[aria-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled):not([aria-disabled='true']) {
    background: var(--button-hover-bg, #43413f);
    color: var(--button-hover-color, #fff);
  }

  @media (max-width: 768px) {
    padding-left: 1.125rem;
    padding-right: 1.125rem;
  }
`;

const Spinner = styled.span`
  display: inline-block;
  width: var(--button-spinner-size);
  height: var(--button-spinner-size);
  border: var(--button-spinner-border) solid var(--button-spinner-color);
  border-top: var(--button-spinner-border) solid var(--button-spinner-accent-color);
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const LeftIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: var(--button-icon-size);
  width: var(--button-icon-size);
  color: currentColor;
  fill: currentColor;
`;

const RightIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: var(--button-icon-size);
  width: var(--button-icon-size);
  color: currentColor;
  fill: currentColor;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  'aria-label'?: string;
  loading?: boolean;
  disabled?: boolean;
  role?: React.AriaRole;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      loading = false,
      disabled = false,
      role = 'button',
      'aria-label': ariaLabel,
      type = 'button',
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        type={type}
        className={cn(className)}
        role={role}
        aria-label={ariaLabel}
        aria-disabled={disabled || loading ? true : undefined}
        disabled={disabled || loading}
        aria-busy={loading ? true : undefined}
        data-slot="button"
        tabIndex={disabled || loading ? -1 : 0}
        {...props}
      >
        {loading ? <Spinner aria-hidden="true" /> : null}
        {leftIcon ? <LeftIcon aria-hidden="true">{leftIcon}</LeftIcon> : null}
        {children}
        {rightIcon ? <RightIcon aria-hidden="true">{rightIcon}</RightIcon> : null}
      </StyledButton>
    );
  }
);
Button.displayName = 'Button';

export { Button };
