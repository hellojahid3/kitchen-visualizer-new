import { useId } from 'react';

import { cn } from '@/lib/utils';
import {
  TextInputContainer,
  TextInputControl,
  TextInputErrorMessage,
  TextInputLabel,
} from './text-input.styled';

function TextInput({
  id,
  className,
  type,
  label,
  error,
  ...props
}: React.ComponentProps<'input'> & { label: string; error?: string }) {
  const generatedId = useId();

  return (
    <TextInputContainer>
      <TextInputLabel htmlFor={id || generatedId}>{label}</TextInputLabel>
      <TextInputControl
        type={type}
        data-slot="input"
        id={id || generatedId}
        className={cn(className)}
        {...props}
      />
      {error && <TextInputErrorMessage>{error}</TextInputErrorMessage>}
    </TextInputContainer>
  );
}

export { TextInput };
