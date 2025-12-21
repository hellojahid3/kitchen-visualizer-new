import { useId } from 'react';
import styled from 'styled-components';

import { cn } from '@/lib/utils';

const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  gap: 0.25rem;
  padding: 0;
  margin: 0;
`;

const InputLabel = styled.label`
  user-select: none;
  display: block;
  color: rgb(var(--kv-input-label-color-rgb));
  font-size: var(--kv-input-label-font-size);
  line-height: var(--kv-input-label-line-height);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const InputControl = styled.input`
  display: block;
  font-family: var(--kv-font-sans);
  color: rgb(var(--kv-input-color-rgb));
  background: rgb(var(--kv-input-bg-rgb));
  width: 100%;
  font-size: var(--kv-input-font-size);
  line-height: var(--kv-input-line-height);
  margin: 0;
  padding: var(--kv-input-padding);
  letter-spacing: inherit;
  border: var(--kv-input-border-width) var(--kv-input-border-style) rgb(var(--kv-input-border-rgb));
  border-radius: var(--kv-input-border-radius);
  box-sizing: border-box;
  transition: border-color 0.2s ease;
  outline: none;

  &:focus {
    background-color: rgb(var(--kv-input-focus-bg-rgb) / var(--kv-input-focus-bg-opacity));
    border-color: rgb(var(--kv-input-focus-border-color));
    box-shadow: var(--kv-input-focus-box-shadow);
  }

  &::placeholder {
    color: rgb(var(--kv-input-placeholder-color-rgb));
  }
`;

const InputErrorMessage = styled.p`
  color: rgb(var(--kv-input-error-rgb));
  font-size: 0.75rem;
  margin-bottom: 0;
`;

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
    <InputContainer>
      <InputLabel htmlFor={id || generatedId}>{label}</InputLabel>
      <InputControl
        type={type}
        data-slot="input"
        id={id || generatedId}
        className={cn(className)}
        {...props}
      />
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </InputContainer>
  );
}

export { TextInput };
