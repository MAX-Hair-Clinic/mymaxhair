import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button1: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="Button1">
      <span>{children}</span>
    </button>
  );
};

export default Button1;
