import { useId } from 'react';
import styled from 'styled-components';

import { cn } from '@/lib/utils';

const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  padding: 0px;
  margin: 0px;
  border: 0px;
  vertical-align: top;
`;

const InputLabel = styled.label`
  color: var(--color-input-label-color);
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  display: block;
  text-overflow: ellipsis;
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin: left top;
  z-index: 1;
  user-select: none;
  pointer-events: auto;
  transform: translate(13px, 10px) scale(0.75);
  padding: 0px;
  white-space: nowrap;
  overflow: hidden;
`;

const InputControl = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: var(--color-input-color);
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.375em;
  margin: 0px;
  display: block;
  min-width: 0px;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 26px 12px 10px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: border-color 0.2s ease;
  border-radius: var(--input-border-radius, 4px);
  border-width: 2px;
  border-style: solid;
  border-color: var(--color-input-border);

  &:focus {
    border-color: var(--color-input-border-focus);
  }

  &::placeholder {
    font-size: 0.9rem;
  }
`;

const InputControlWrapper = styled.div`
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  color: var(--color-input-label-color);
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: var(--input-border-radius, 4px);
  overflow: hidden;
  background-color: var(--color-input-bg);
`;

const InputErrorMessage = styled.p`
  color: var(--color-danger);
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
      <InputControlWrapper>
        <InputControl
          type={type}
          data-slot="input"
          id={id || generatedId}
          className={cn(className)}
          {...props}
        />
      </InputControlWrapper>
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </InputContainer>
  );
}

export { TextInput };
