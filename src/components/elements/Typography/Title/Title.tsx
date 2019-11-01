import React, { CSSProperties } from "react";

// styles
import "components/elements/Typography/Title/Title.scss";

type TitleType = "h1";

type Title = {
  children: any;
  type?: TitleType;
  className?: string;
  style?: CSSProperties;
};

const Title = ({ type, children, className = "", style }: Title) => {
  const types = {
    h1: "h1"
  };

  const { h1 } = types;

  const getTitleElement = () => (
    <h1 style={style} className={`title title--${h1} ${className}`.trim()}>
      {children}
    </h1>
  );

  switch (type) {
    case h1:
      return getTitleElement();
    default:
      return getTitleElement();
  }
};

export default Title;
