import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "../custom-link";
import * as Markup from "./layout.styles";

export const Layout = () => {
  return (
    <>
      <Markup.Header>
        {/**
         * NavLink -добавляет по умолчанию класс active на активную ссылку,
         * также можно создать кастомный класс
         * (в остальном поведение идентично Link)
         */}
        <NavLink to="/">Home</NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/posts"
        >
          Blog
        </NavLink>
        <CustomLink to={"/about"}>About</CustomLink>
      </Markup.Header>
      <main>
        {/** Outlet -ReactElement в который отрисовывается children */}
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
