"use client";

interface ButtonProps {
  className?: string;
  children: any;
  index?: number;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <span
      className={`button uppercase font-black tracking-nav relative text-sm lg:text-button border text-center border-transparent transition-all rounded-md shadow-sm ${className}`}
    >
      {children}
    </span>
  );
};
