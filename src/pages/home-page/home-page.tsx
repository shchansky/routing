import React from "react";
import type { Props } from "./home-page.types";

export const HomePage = (props: Props) => {
  return (
    <div className={props.className}>
      <h1>home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        asperiores error vel nulla tempore facilis eum recusandae tenetur
        accusamus quibusdam repellat quis, perferendis soluta molestias? Autem
        dolorum aperiam porro veritatis.
      </p>
    </div>
  );
};
