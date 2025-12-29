interface IconNoSplashbackProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const IconNoSplashback = ({ size = 24, ...props }: IconNoSplashbackProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M5.33301 24H26.6663"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M12 12L20 20M20 12L12 20"
        stroke="currentColor"
        stroke-opacity="0.45"
        stroke-width="1.33333"
        stroke-linecap="round"
      />
    </svg>
  );
};
