import { type ComponentProps, forwardRef } from 'react';

import { ControlButtonStyled } from './ControlButton.styled';

const ControlButton = forwardRef<
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

export default ControlButton;
