interface IconHobSplashbackProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const IconHobSplashback = ({ size = 24, ...props }: IconHobSplashbackProps) => {
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
        d="M20.667 9.3335H11.3337C10.9655 9.3335 10.667 9.63197 10.667 10.0002V23.3335C10.667 23.7017 10.9655 24.0002 11.3337 24.0002H20.667C21.0352 24.0002 21.3337 23.7017 21.3337 23.3335V10.0002C21.3337 9.63197 21.0352 9.3335 20.667 9.3335Z"
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
        d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
        stroke="currentColor"
        stroke-width="1.06667"
      />
    </svg>
  );
};
