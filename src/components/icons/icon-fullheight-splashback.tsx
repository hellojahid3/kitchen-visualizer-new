interface IconFullHeightSplashbackProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const IconFullHeightSplashback = ({
  size = 24,
  ...props
}: IconFullHeightSplashbackProps) => {
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
        d="M25.9997 5.3335H5.99967C5.63148 5.3335 5.33301 5.63197 5.33301 6.00016V23.3335C5.33301 23.7017 5.63148 24.0002 5.99967 24.0002H25.9997C26.3679 24.0002 26.6663 23.7017 26.6663 23.3335V6.00016C26.6663 5.63197 26.3679 5.3335 25.9997 5.3335Z"
        stroke="currentColor"
        stroke-width="1.33333"
      />
      <path
        d="M5.33301 24H26.6663"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M10.667 5.3335V24.0002"
        stroke="currentColor"
        stroke-width="0.666667"
        stroke-dasharray="1.33 2.67"
      />
      <path
        d="M21.333 5.3335V24.0002"
        stroke="currentColor"
        stroke-width="0.666667"
        stroke-dasharray="1.33 2.67"
      />
    </svg>
  );
};
