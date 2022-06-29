import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "../custom-link";
import * as Markup from "./layout.styles";

/**
 * Outlet -это placeholder в который будет
 * отрисовываться динамически изменяющийся контент
 */

/**
 * NavLink -добавляет по умолчанию класс active на активную ссылку,
 * также можно создать кастомный класс 
 * (в остальном поведение идентично Link)
 */

export const Layout = () => {
  return (
    <>
      <Markup.Header >
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
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
