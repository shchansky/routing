import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth, AuthProvider } from "../hoc";
import * as Pages from "../pages";
import * as Components from "../components";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/**
         * Components.Layout -это общая обертка, кот. будет всегда отрисовываться
         * и внутри этой обертки выполняются динамические изменения контента
         */}
        <Route path="/" element={<Components.Layout />}>
          <Route
            index
            element={<Pages.HomePage className="example-props-className" />}
          />
          <Route path="about/*" element={<Pages.AboutPage />} />
          {/**
            * replace - позволяет реализовать обычную переадресацию,
           * без сохранения в истории посещения адреса "/about-us"
           * */}
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Pages.BlogPage />} />
          <Route path="posts/:id" element={<Pages.Singlepage />} />
          <Route path="posts/:id/edit" element={<Pages.EditPost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <Pages.CreatePost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Pages.LoginPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
