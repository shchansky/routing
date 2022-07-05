import React from "react";
import { useParams } from "react-router-dom";

export const EditPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit post page</h1>
      <div>header, id-{id}</div>
    </div>
  );
};
