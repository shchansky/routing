import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "../pages";
import * as Components from "../components";

/**
 * Components.Layout -это общая обертка, кот. будет всегда отрисовываться
 * и внутри этой обертки выполняются динамические изменения контента
 */

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Components.Layout />}>
          <Route
            index
            element={<Pages.HomePage className="example-props-className" />}
          />
          <Route path="/about" element={<Pages.AboutPage />} />
          <Route path="/posts" element={<Pages.BlogPage />} />
          <Route path="/posts/:id" element={<Pages.Singlepage />} />
          <Route path="/posts/:id/edit" element={<Pages.EditPost />} />
          <Route path="/posts/new" element={<Pages.CreatePost />} />

          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
