import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled.button`
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

export const Spinner = styled.span`
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

export const LeftIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: var(--kv-button-icon-size, 0.875rem);
  width: var(--kv-button-icon-size, 0.875rem);
  color: currentColor;
  fill: currentColor;
`;

export const RightIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: var(--kv-button-icon-size, 0.875rem);
  width: var(--kv-button-icon-size, 0.875rem);
  color: currentColor;
  fill: currentColor;
`;
