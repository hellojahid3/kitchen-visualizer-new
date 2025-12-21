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
  gap: 0.5rem;
  width: var(--kv-button-width, auto);
  padding: var(--kv-button-padding, 0.5rem 1.25rem);
  font-size: var(--kv-button-font-size, 0.875rem);
  font-weight: var(--kv-button-font-weight, 500);
  line-height: var(--kv-button-line-height, 1.43);
  border: var(--kv-button-border-width, 0px) var(--kv-button-border-style, solid)
    var(--kv-button-border-color, transparent);
  border-radius: var(--kv-button-border-radius, 0.125rem);
  background: rgb(var(--kv-button-bg-rgb, 79, 70, 229));
  color: rgb(var(--kv-button-color-rgb, 255, 255, 255));
  cursor: pointer;
  transition: background 0.2s;

  &:disabled,
  &[aria-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled):not([aria-disabled='true']) {
    background: rgb(var(--kv-button-hover-bg-rgb, 80, 80, 80));
    color: rgb(var(--kv-button-hover-color-rgb, 255, 255, 255));
    border-color: rgb(var(--kv-button-hover-border-color-rgb));
  }

  @media (max-width: 768px) {
    padding-left: 1.125rem;
    padding-right: 1.125rem;
  }
`;

const Spinner = styled.span`
  display: inline-block;
  width: var(--kv-button-spinner-size, 0.875rem);
  height: var(--kv-button-spinner-size, 0.875rem);
  border: var(--kv-button-spinner-border, 2px) solid
    rgb(var(--kv-button-spinner-color-rgb, 255, 255, 255));
  border-top: var(--kv-button-spinner-border, 2px) solid
    rgb(var(--kv-button-spinner-accent-color-rgb, 113, 128, 150));
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const LeftIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: var(--kv-button-icon-size, 0.875rem);
  width: var(--kv-button-icon-size, 0.875rem);
  color: currentColor;
  fill: currentColor;
`;

const RightIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: var(--kv-button-icon-size, 0.875rem);
  width: var(--kv-button-icon-size, 0.875rem);
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
