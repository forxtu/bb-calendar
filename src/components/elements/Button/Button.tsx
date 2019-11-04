import React, { CSSProperties } from "react";

// styles
import "components/elements/Button/Button.scss";

type ButtonType = "regular" | "link";
type ButtonSize = "large" | "regular" | "small";

type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  children: any;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const Button = ({
  type = "regular",
  size = "regular",
  children,
  onClick
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`button button--${type} button-size--${size}`}
  >
    {children}
  </button>
);

export default Button;
