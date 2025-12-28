import { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { LeftIcon, RightIcon, Spinner, StyledButton } from './button.styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  'aria-label'?: string;
  loading?: boolean;
  disabled?: boolean;
  role?: React.AriaRole;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
