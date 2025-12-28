import { useId } from 'react';

import { cn } from '@/lib/utils';
import {
  TextInputContainer,
  TextInputControl,
  TextInputErrorMessage,
  TextInputLabel,
} from './text-input.styled';

export type TextInputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

export const TextInput = ({ id, className, type, label, error, ...props }: TextInputProps) => {
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
};
