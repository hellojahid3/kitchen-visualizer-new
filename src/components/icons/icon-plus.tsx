import * as React from 'react';

interface IconPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function IconPlus({ size = 24, ...props }: IconPlusProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  );
}
