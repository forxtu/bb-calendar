import React, { CSSProperties } from "react";

// styles
import "components/elements/Button/Button.scss";

type ButtonType = "regular" | "link";

type ButtonProps = {
  type?: ButtonType;
  children: any;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  rest?: any;
};

const Button = ({ type = "regular", children, onClick, rest }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button button--${type}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
