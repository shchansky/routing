import React from "react";
import { Link, useMatch } from "react-router-dom";
import type { Props } from "./custom-link.types";

export const CustomLink = (props: Props) => {
  const match = useMatch(props.to as string);

  return (
    <Link to={props.to} style={{ color: match ? "blue" : "orange" }}>
      {props.children}
    </Link>
  );
};