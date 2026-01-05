interface CapProps {
  bgColor?: string;
}

export const Cap = ({ bgColor }: CapProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1366.636"
    className="cap hidden md:block mega:hidden absolute h-auto left-0"
    height="65.87"
    viewBox="0 0 1366.636 65.87"
  >
    <path
      d="M0,0,1366-65.87V0H0Z"
      transform="translate(0.636 65.87)"
      fill={bgColor || undefined}
    />
  </svg>
);
