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

const Title = ({ type = "h1", children, className = "", style }: Title) => (
  <h1 style={style} className={`title title--${type} ${className}`.trim()}>
    {children}
  </h1>
);

export default Title;
