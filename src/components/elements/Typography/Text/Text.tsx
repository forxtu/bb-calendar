import React, { CSSProperties } from "react";

// styles
import "components/elements/Typography/Text/Text.scss";

type TextType = "regular" | "small";

type Text = {
  children: any;
  type?: TextType;
  className?: string;
  style?: CSSProperties;
};

const Text = ({ type = "regular", children, className = "", style }: Text) => (
  <p style={style} className={`text text--${type} ${className}`.trim()}>
    {children}
  </p>
);

export default Text;
