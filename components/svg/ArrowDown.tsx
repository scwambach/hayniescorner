import { colors } from '@styles';

const ArrowDown = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44">
      <g transform="translate(-970 -1118)">
        <circle
          cx="22"
          cy="22"
          r="22"
          transform="translate(970 1118)"
          fill={colors.black}
        />
        <path
          d="m996.737 1137.562-4.3 4.3-4.298-4.3h-5.921l10.22 10.22 10.22-10.22Z"
          fill={colors.white}
        />
      </g>
    </svg>
  );
};

export { ArrowDown };
export default ArrowDown;
