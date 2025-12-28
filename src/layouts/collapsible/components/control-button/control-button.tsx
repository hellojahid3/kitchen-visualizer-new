import { type ComponentProps, forwardRef } from 'react';

import { ControlButtonStyled } from './control-button.styled';

export const ControlButton = forwardRef<
  HTMLButtonElement,
  {
    isActive?: boolean;
  } & ComponentProps<'button'>
>(({ isActive, ...props }, ref) => {
  return (
    <ControlButtonStyled
      data-active={isActive}
      ref={ref}
      {...props}
    />
  );
});
