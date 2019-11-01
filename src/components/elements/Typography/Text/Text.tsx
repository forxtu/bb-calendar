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

const Text = ({ type, children, className = "", style }: Text) => {
  const types = {
    regular: "regular",
    small: "small"
  };

  const { regular, small } = types;

  const getTextElement = (type: string) => (
    <p style={style} className={`text text--${type} ${className}`.trim()}>
      {children}
    </p>
  );

  switch (type) {
    case regular:
      return getTextElement(regular);
    case small:
      return getTextElement(small);
    default:
      return getTextElement(regular);
  }
};

export default Text;
