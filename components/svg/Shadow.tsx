import { colors } from '@styles';

export const Shadow = ({ color = colors.black, reverse }) => {
  return (
    <>
      {reverse ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="422.532"
          height="488.757"
          viewBox="0 0 422.532 488.757"
        >
          <defs>
            <clipPath id="a">
              <path fill={color} d="M0 0H384.162V457.014H0z"></path>
            </clipPath>
          </defs>
          <g clipPath="url(#a)" transform="rotate(-174.87 202.023 236.063)">
            <path
              fill={color}
              d="M370.084 457L12.965 440.59C5.72 440.257 0 433.613 0 425.531V31.012c0-8.089 5.729-14.736 12.981-15.059L370.1.012c7.674-.342 14.063 6.5 14.063 15.059v426.872c0 8.567-6.4 15.411-14.079 15.058"
            ></path>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="422.532"
          height="488.757"
          viewBox="0 0 422.532 488.757"
        >
          <defs>
            <clipPath id="a">
              <path fill={color} d="M0 0H384.162V457.014H0z"></path>
            </clipPath>
          </defs>
          <g clipPath="url(#a)" transform="rotate(-5.13 384.039 17.657)">
            <path
              fill={color}
              d="M370.084.013L12.965 16.425C5.72 16.758 0 23.4 0 31.483V426c0 8.089 5.729 14.736 12.981 15.059L370.1 457c7.674.342 14.063-6.5 14.063-15.059V15.071c0-8.567-6.4-15.411-14.079-15.058"
            ></path>
          </g>
        </svg>
      )}
    </>
  );
};
