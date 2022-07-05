import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found page</h1>
      <div>
        This page doesn't exist. Go to <Link to="/">home</Link>
      </div>
    </div>
  );
};
