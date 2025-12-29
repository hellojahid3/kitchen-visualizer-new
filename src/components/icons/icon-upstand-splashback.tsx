interface IconUpstandSplashbackProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const IconUpstandSplashback = ({ size = 24, ...props }: IconUpstandSplashbackProps) => {
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
        d="M25.9997 20H5.99967C5.63148 20 5.33301 20.2985 5.33301 20.6667V23.3333C5.33301 23.7015 5.63148 24 5.99967 24H25.9997C26.3679 24 26.6663 23.7015 26.6663 23.3333V20.6667C26.6663 20.2985 26.3679 20 25.9997 20Z"
        stroke="currentColor"
        stroke-width="1.33333"
      />
      <path
        d="M5.33301 24H26.6663"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="square"
      />
    </svg>
  );
};
