import React, { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  title,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={`py-1 px-2 w-auto flex flex-col gap-0 justify-center items-center px-auto snap-start ${className}`}
      {...otherProps}
    >
      {icon}
      <span className="text-sm text-nowrap">{title}</span>
    </button>
  );
};

export default Button;
