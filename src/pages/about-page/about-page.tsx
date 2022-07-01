import React from "react";
import { Route, Routes, Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div>
      <h1>About page</h1>
      <ul>
        <li>
          <Link to="contacts">Our contacts</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
        pariatur repudiandae ducimus eos beatae ut, ad eligendi, fugiat porro
        rerum nulla eum placeat atque quisquam dolorem quas culpa obcaecati!
        Autem.
      </p>
      <Routes>
        <Route path="contacts" element={<div>Our contacts</div>} />
        <Route path="team" element={<div>Our team</div>} />
      </Routes>
    </div>
  );
};
