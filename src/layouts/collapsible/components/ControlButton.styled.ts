import styled from 'styled-components';

export const ControlButtonStyled = styled.button<{
  isActive?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  padding: 0.5rem;
  color: rgb(var(--kv-color-accent-hover));
  background-color: #ffffff;
  border-radius: 9999px;
  border: 1px solid rgb(var(--kv-color-accent));
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &[data-active='true'] {
    color: #ffffff;
    background-color: rgb(var(--kv-color-accent));
  }
`;
