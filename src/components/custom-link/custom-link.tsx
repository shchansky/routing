import React from "react";
import { Link, useMatch } from "react-router-dom";
import type { Props } from "./custom-link.types";

export const CustomLink = (props: Props) => {
  // const match = useMatch(props.to as string);
  const match = useMatch({ path: props.to, end: props.to.length === 1 });

  return (
    <Link to={props.to} style={{ color: match ? "blue" : "orange" }}>
      {props.children}
    </Link>
  );
};
