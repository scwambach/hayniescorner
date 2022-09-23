import { isEven } from '@utils';

interface ButtonProps {
  classes?: string;
  children: any;
  index?: number;
}

const Button = ({ children, classes, index }: ButtonProps) => {
  return (
    <span
      className={`button uppercase font-black tracking-nav relative text-sm lg:text-button border text-center border-transparent transition-all rounded-md shadow-sm ${classes}`}
    >
      {children}
    </span>
  );
};

export { Button };
export default Button;
